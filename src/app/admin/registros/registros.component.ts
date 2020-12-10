import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from 'src/app/services/firebase.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  config: any;
  registrosCollection = { count: 0, data: []}
  closeResult = '';

  registroForm: FormGroup;

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
      totalItems: this.registrosCollection.count
    };

    this.registroForm = this.fb.group({
      estado:['',Validators.required],
    });

    this.firebaseService.getRegistro().subscribe(resp=>{
      this.registrosCollection.data = resp.map((e:any)=>{
        return{
          correo: e.payload.doc.data().correo,
          mpago: e.payload.doc.data().mpago,
          mretiro: e.payload.doc.data().mretiro,
          direccion: e.payload.doc.data().direccion,
          uid: e.payload.doc.data().uid,
          estado: e.payload.doc.data().estado,
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

  eliminarRegistro(item:any):void{
    this.firebaseService.deletePago(item.idFirebase);
  }


  actualizarRegistro(){
    if(!isNullOrUndefined(this.idFirebaseActualizar)){
      this.firebaseService.updateRegistro(this.idFirebaseActualizar,this.registroForm.value).then(resp =>{
        this.registroForm.reset();
        this.modalService.dismissAll();
      }).catch(error=>{
        console.error(error);
      })
    }
  }

  openEditar(content,item:any) {

    this.registroForm.setValue({
      estado: item.estado,
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
