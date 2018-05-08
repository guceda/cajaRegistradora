import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Producto } from '../classProducto';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input()titulo:String
  @Input()productos:any
  @Output()onSend: EventEmitter<any>

  constructor() { 
    this.onSend = new EventEmitter()
  }

  ngOnInit() { 
  }

  handleOnSend($event){
    this.onSend.emit($event)
  }
}
