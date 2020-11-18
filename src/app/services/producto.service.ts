import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [
    new Producto(1,'Producto1','descripcion 1',100, "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/d/divertidas-gomitas-de-gelatina-para-los-peques-1.jpg"),
    new Producto(2,'Producto2','descripcion 2',100, "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/d/divertidas-gomitas-de-gelatina-para-los-peques-1.jpg"),
    new Producto(3,'Producto3','descripcion 3',100, "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/d/divertidas-gomitas-de-gelatina-para-los-peques-1.jpg"),
    new Producto(4,'Producto4','descripcion 4',100, "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/d/divertidas-gomitas-de-gelatina-para-los-peques-1.jpg"),
    new Producto(5,'Producto5','descripcion 5',100, "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/d/divertidas-gomitas-de-gelatina-para-los-peques-1.jpg"),
    new Producto(6,'Producto6','descripcion 6',100, "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/d/divertidas-gomitas-de-gelatina-para-los-peques-1.jpg"),
    new Producto(7,'Producto7','descripcion 7',100, "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/d/divertidas-gomitas-de-gelatina-para-los-peques-1.jpg"),

  ]

  constructor() { }
  
  getProducto(): Producto[]{
    return this.productos
  }
}
