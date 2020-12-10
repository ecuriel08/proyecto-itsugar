import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.scss']
})
export class DetallesProductoComponent implements OnInit {
  // Validacion de usuario
  isAuthenticated = false;
  user: User = null;

  //Obtener el producto
  productoId: any;
  productosCollection = { count: 0, data: []}
  precioCollection = { count: 0, data: []}

  //Formulario Crear bolsa
  bolsasCollection = { count: 0, data: []}
  closeResult = '';

  bolsaForm: FormGroup;
  idFirebaseActualizar: string;
  actualizar: boolean;
  pesos = [0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1600,1650,1700,1750,1800,1850,1900,1950,2000]


  constructor(
    private route:ActivatedRoute,
    private firebaseService: FirebaseService,
    public authService: AuthService,
    private modalService: NgbModal,
    public fb: FormBuilder,) { }


  ngOnInit(): void {
    // Usuario
    this.getCurrentUser();

    this.idFirebaseActualizar ='';
    this.actualizar = false;

    // Formulario bolsa
    this.bolsaForm = this.fb.group({
      uid:['',Validators.required],
      nombre:['',Validators.required],
      producto:['',Validators.required],
      peso:[0,Validators.required],
      precio:[0,Validators.required]
    });

    // Obtener el producto
    this.productoId = this.route.snapshot.paramMap.get('pId');

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

    this.firebaseService.getProductos().subscribe(resp=>{
      this.precioCollection.data = resp.map((e:any)=>{
        return{
          precio:e.payload.doc.data().precio,
        }
      })
    },
      error=>{
        console.error(error);
      }
    );


  }

  //Validacion Usuario
  getCurrentUser(): void{
    this.authService.getCurrentUser().subscribe(response =>{
      if (response){
        this.isAuthenticated = true;
        this.user = response;
        return;
      }
      this.isAuthenticated = false;
      this.user = null;
    })
  }
  //Formulario Crear bolsa

  guardarBolsa():void{
    this.firebaseService.crearBolsa(this.bolsaForm.value).then(resp=>{
      this.bolsaForm.reset();
      this.modalService.dismissAll();
    }).catch(error =>{
      console.error(error)
    })
    
  }


  // ABRIR FORMULARIO
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
