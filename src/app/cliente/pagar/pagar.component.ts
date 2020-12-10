import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.scss']
})
export class PagarComponent implements OnInit {

  isAuthenticated = false;
  user: User = null;
  bolsaId: any;
  //Obtener el producto
  clienteId: any;

  // REGISTROS 
  registrosCollection = { count: 0, data: []}
  closeResult = '';

  registroForm: FormGroup;
  idFirebaseActualizar: string;
  actualizar: boolean;

  bolsasCollection = { count: 0, data: []}
  pagosCollection = { count: 0, data: []}
  retirosCollection = { count: 0, data: []}
  productosCollection = { count: 0, data: []}

  constructor(private firebaseService: FirebaseService,
              private route:ActivatedRoute,
              public authService: AuthService,
              private modalService: NgbModal,
              public fb: FormBuilder,) { }

  ngOnInit(): void {

    this.getCurrentUser();

    this.idFirebaseActualizar ='';
    this.actualizar = false;

    // Formulario Registro
    this.registroForm = this.fb.group({
      uid:['',Validators.required],
      correo:['',Validators.required],
      mpago:['',Validators.required],
      mretiro:['',Validators.required],
      direccion:['',Validators.required],
      estado:['',Validators.required],
    });

    // Obtener la bolsa
    this.bolsaId = this.route.snapshot.paramMap.get('bId');
    //METODOS DE RETIRO

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

    // METODOS DE PAGO

    this.firebaseService.getPago().subscribe(resp=>{
      this.pagosCollection.data = resp.map((e:any)=>{
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

    // PRODUCTOS 

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

    // Obtener bolsas
    this.firebaseService.getBolsa().subscribe(resp=>{
      this.bolsasCollection.data = resp.map((e:any)=>{
        return{
          nombre: e.payload.doc.data().nombre,
          producto: e.payload.doc.data().producto,
          peso: e.payload.doc.data().peso,
          uid: e.payload.doc.data().uid,
          precio: e.payload.doc.data().precio,
          idFirebase: e.payload.doc.id
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

  guardarRegistro():void{
    this.firebaseService.crearRegistro(this.registroForm.value).then(resp=>{
      this.registroForm.reset();
      this.modalService.dismissAll();
    }).catch(error =>{
      console.error(error)
    })
    
  }

}
