import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../classProducto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input()producto:Producto
  @Output()onSend: EventEmitter<any>



  constructor() { 
    this.onSend = new EventEmitter()
  }
  ngOnInit() {
  }
  handleClick(objeto) {
    this.carrito.push(objeto)
    this.onSend.emit(this.carrito)
   
  }
  
}

