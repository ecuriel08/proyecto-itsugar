import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  productosCollection = { count: 0, data: []}

  constructor(
    private firebaseService: FirebaseService) { }

  ngOnInit() {

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


}

