import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  // Validacion de usuario
  isAuthenticated = false;
  user: User = null;

  //Obtener el producto
  clienteId: any;

  bolsasCollection = { count: 0, data: []}

  constructor(
    private route:ActivatedRoute,
    private firebaseService: FirebaseService,
    public authService: AuthService,
  ) { }

  ngOnInit() {

    // Obtener cliente
    this.clienteId = this.route.snapshot.paramMap.get('uId');

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


}
