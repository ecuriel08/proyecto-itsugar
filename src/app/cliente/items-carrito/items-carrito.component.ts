import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-carrito',
  templateUrl: './items-carrito.component.html',
  styleUrls: ['./items-carrito.component.scss']
})
export class ItemsCarritoComponent implements OnInit {

  @Input() carritoItem: any

  constructor() { }

  ngOnInit(): void {
  }

}
