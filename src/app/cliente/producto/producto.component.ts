import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { MessengerService } from 'src/app/services/messenger.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() productoItem: Producto

  constructor(private msg: MessengerService,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  agregarACarrito(){
    this.msg.sendMsg(this.productoItem)
    
  }
  

}
