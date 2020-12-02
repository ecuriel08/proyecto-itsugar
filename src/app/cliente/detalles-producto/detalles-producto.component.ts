import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.scss']
})
export class DetallesProductoComponent implements OnInit {

  productoId: any;
  productosCollection = { count: 0, data: []}

  constructor(
    private route:ActivatedRoute,
    private firebaseService: FirebaseService) { }


  ngOnInit(): void {

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


    


  }


}
