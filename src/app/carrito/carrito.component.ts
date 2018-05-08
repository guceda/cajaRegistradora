import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Input()listaCompra:any
  @Output()onBorrar: EventEmitter<any>
  constructor() {
    this.onBorrar = new EventEmitter()
   }
  ngOnInit() {
  }
  sumarTotal(){
    let suma = 0
    for (let i = 0; i < this.listaCompra.length; i++) {
      suma += parseInt(this.listaCompra[i].precio)
    }
    return suma
  }
  handleClick(){
    console.log('click para borrar');
    this.onBorrar.emit('emitiendo para borrar')
    
  }
}
