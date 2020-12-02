import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from 'src/app/services/firebase.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.scss']
})
export class RetiroComponent implements OnInit {

  config: any;
  retirosCollection = { count: 0, data: []}
  closeResult = '';

  retiroForm: FormGroup;

  idFirebaseActualizar: string;
  actualizar: boolean;

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private firebaseService: FirebaseService
    ) {}

  ngOnInit(): void {

    this.idFirebaseActualizar ='';
    this.actualizar = false;

    this.config = {
      itemsPerPage : 10,
      currentPage: 1,
      totalItems: this.retirosCollection.count
    };

    this.retiroForm = this.fb.group({
      nombre:['',Validators.required],
    });

    this.firebaseService.getRetiro().subscribe(resp=>{
      this.retirosCollection.data = resp.map((e:any)=>{
        return{
          nombre: e.payload.doc.data().nombre,
          idFirebase: e.payload.doc.id
        }
      })
    },
      error=>{
        console.error(error);
      }
    );

  }

  pageChange(event){
    this.config.currentPage = event
  }

  eliminarRetiro(item:any):void{
    this.firebaseService.deleteRetiro(item.idFirebase);
  }

  guardarRetiro():void{

    this.firebaseService.crearRetiro(this.retiroForm.value).then(resp=>{
      this.retiroForm.reset();
      this.modalService.dismissAll();
    }).catch(error =>{
      console.error(error)
    })
    
  }

  actualizarRetiro(){
    if(!isNullOrUndefined(this.idFirebaseActualizar)){
      this.firebaseService.updateRetiro(this.idFirebaseActualizar,this.retiroForm.value).then(resp =>{
        this.retiroForm.reset();
        this.modalService.dismissAll();
      }).catch(error=>{
        console.error(error);
      })
    }
  }

  openEditar(content,item:any) {

    this.retiroForm.setValue({
      nombre: item.nombre,
    });
    this.idFirebaseActualizar = item.idFirebase;
    this.actualizar = true;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content) {
    this.actualizar = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
