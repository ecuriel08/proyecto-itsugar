import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() productoItem: Producto

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  agregarACarrito(){
    this.msg.sendMsg(this.productoItem)
    
  }

}
