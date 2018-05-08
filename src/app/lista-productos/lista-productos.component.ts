import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Producto from '../classProducto';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input()titulo:String
  @Input()productos:any

  constructor() { 
  }

  ngOnInit() { 
    console.log(this.Arrays); 
  }
  handleOnSend($event){
    console.log('se han enviado los datos')
  }
 
}
