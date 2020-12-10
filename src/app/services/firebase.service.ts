import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore:AngularFirestore
  ) { }

  //  PRODUCTOS
  getProductos(){
    return this.firestore.collection('productos').snapshotChanges();
  }

  crearProducto(producto:any){
    return this.firestore.collection('productos').add(producto);
  }

  updateProducto(idFirebase:any, producto:any){
    return this.firestore.collection('productos').doc(idFirebase).update(producto);
  }

  deleteProducto(idFirebase:any){
    return this.firestore.collection('productos').doc(idFirebase).delete();
  }

  getProductoById(idFirebase:any){
    return this.firestore.collection('productos').doc(idFirebase).snapshotChanges();
  }



  //  CATEGORIAS
  getCategoria(){
    return this.firestore.collection('categorias').snapshotChanges();
  }

  crearCategoria(categoria:any){
    return this.firestore.collection('categorias').add(categoria);
  }

  updateCategoria(idFirebase:any, categoria:any){
    return this.firestore.collection('categorias').doc(idFirebase).update(categoria);
  }

  deleteCategoria(idFirebase:any){
    return this.firestore.collection('categorias').doc(idFirebase).delete();
  }

  // METODOS DE PAGOS 
  getPago(){
    return this.firestore.collection('pagos').snapshotChanges();
  }

  crearPago(pago:any){
    return this.firestore.collection('pagos').add(pago);
  }

  updatePago(idFirebase:any, pago:any){
    return this.firestore.collection('pagos').doc(idFirebase).update(pago);
  }

  deletePago(idFirebase:any){
    return this.firestore.collection('pagos').doc(idFirebase).delete();
  }

  // METODOS DE RETIRO
  getRetiro(){
    return this.firestore.collection('retiros').snapshotChanges();
  }

  crearRetiro(retiro:any){
    return this.firestore.collection('retiros').add(retiro);
  }

  updateRetiro(idFirebase:any, retiro:any){
    return this.firestore.collection('retiros').doc(idFirebase).update(retiro);
  }

  deleteRetiro(idFirebase:any){
    return this.firestore.collection('retiros').doc(idFirebase).delete();
  }

  // REGISTROS
  getRegistro(){
    return this.firestore.collection('registros').snapshotChanges();
  }

  crearRegistro(registro:any){
    return this.firestore.collection('registros').add(registro);
  }

  updateRegistro(idFirebase:any, registro:any){
    return this.firestore.collection('registros').doc(idFirebase).update(registro);
  }

  deleteRegistro(idFirebase:any){
    return this.firestore.collection('registros').doc(idFirebase).delete();
  }

  //CREAR BOLSAS

  getBolsa(){
    return this.firestore.collection('bolsas').snapshotChanges();
  }

  crearBolsa(bolsa:any){
    return this.firestore.collection('bolsas').add(bolsa);
  }

  updateBolsa(idFirebase:any, bolsa:any){
    return this.firestore.collection('bolsas').doc(idFirebase).update(bolsa);
  }

  deleteBolsa(idFirebase:any){
    return this.firestore.collection('bolsas').doc(idFirebase).delete();
  }


}
