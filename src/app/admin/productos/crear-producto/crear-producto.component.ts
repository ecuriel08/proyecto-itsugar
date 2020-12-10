import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';
import { Producto } from 'src/app/models/producto';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  config: any;
  productosCollection = { count: 0, data: []}
  categoriasCollection = { count: 0, data: []}
  closeResult = '';

  productoForm: FormGroup;

  idFirebaseActualizar: string;
  actualizar: boolean;

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private firebaseService: FirebaseService
    ) {}

  ngOnInit(): void {

  
    this.firebaseService.getCategoria().subscribe(resp=>{
      this.categoriasCollection.data = resp.map((e:any)=>{
        return{
          nombre: e.payload.doc.data().nombre,
        }
      })
    },
      error=>{
        console.error(error);
      }
    );

    this.idFirebaseActualizar ='';
    this.actualizar = false;

    this.config = {
      itemsPerPage : 10,
      currentPage: 1,
      totalItems: this.productosCollection.count
    };

    this.productoForm = this.fb.group({
      nombre:['',Validators.required],
      categoria:['',Validators.required],
      descripcion:['',Validators.required],
      precio:['',Validators.required],
      imagenurl:['',Validators.required]
    });

    this.firebaseService.getProductos().subscribe(resp=>{
      this.productosCollection.data = resp.map((e:any)=>{
        return{
          nombre: e.payload.doc.data().nombre,
          categoria: e.payload.doc.data().categoria,
          descripcion: e.payload.doc.data().descripcion,
          precio:e.payload.doc.data().precio,
          imagenurl:e.payload.doc.data().imagenurl,
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

  eliminarProducto(item:any):void{
    this.firebaseService.deleteProducto(item.idFirebase);
  }

  guardarProducto():void{

    this.firebaseService.crearProducto(this.productoForm.value).then(resp=>{
      this.productoForm.reset();
      this.modalService.dismissAll();
    }).catch(error =>{
      console.error(error)
    })
    
  }

  actualizarProducto(){
    if(!isNullOrUndefined(this.idFirebaseActualizar)){
      this.firebaseService.updateProducto(this.idFirebaseActualizar,this.productoForm.value).then(resp =>{
        this.productoForm.reset();
        this.modalService.dismissAll();
      }).catch(error=>{
        console.error(error);
      })
    }
  }

  openEditar(content,item:any) {
    this.productoForm.setValue({
      nombre: item.nombre,
      categoria: item.categoria,
      descripcion: item.descripcion,
      precio: item.precio,
      imagenurl: item.imagenurl,
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
