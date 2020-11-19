import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore:AngularFirestore
  ) { }

  getProductos(){
    return this.firestore.collection('productos').snapshotChanges();
  }

  crearProducto(producto:any){
    return this.firestore.collection('productos').add(producto);
  }

  updateProducto(id:any, producto:any){
    return this.firestore.collection('productos').doc(id).update(producto);
  }
  deleteProducto(id:any){
    return this.firestore.collection('productos').doc(id).delete();
  }
}
