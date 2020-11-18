import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carritoItems = [
    //ESTO CAMBIARLO DESPUES SOLO ES UN PLACE HOLDER 
    /* { id: 1, productoId: 1, productoNombre: 'prueba 1' ,precio: 10 },
    { id: 2, productoId: 2, productoNombre: 'prueba 2' ,precio: 10 },
    { id: 3, productoId: 3, productoNombre: 'prueba 3' ,precio: 10 },
    { id: 4, productoId: 4, productoNombre: 'prueba 4' ,precio: 10 },
    { id: 5, productoId: 5, productoNombre: 'prueba 5' ,precio: 10 }, */
  ];

  carritoTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((producto: Producto) =>{
      this.addProductoToCarrito(producto)
    }) 

  }

  addProductoToCarrito(producto: Producto){

    this.carritoItems.push({
      productoId: producto.id,
      productoNombre: producto.nombre,
      precio: producto.precio
    })

    this.carritoTotal = 0
    this.carritoItems.forEach(item =>{
      this.carritoTotal += (item.precio)
    })

  }
}
