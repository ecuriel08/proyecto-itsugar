import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  listaProductos: Producto[] = []

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.listaProductos = this.productoService.getProducto();
  }

}
