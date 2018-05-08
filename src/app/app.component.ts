import { Component } from '@angular/core';
import { Producto } from '../app/classProducto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  comida: Array<any>
  bebida: Array<any>
  postre: Array<any>
  
  constructor() {
    this.comida = [
      new Producto('uva', '4', '🍇', 'comida'),
      new Producto('melón', '4', '🍈', 'comida'),
      new Producto('sandía', '2', '🍉', 'comida'),
      new Producto('cereza', '9', '🍒', 'comida'),
      new Producto('aguacate', '12', '🥑', 'comida'),
      new Producto('berengena', '5', '🍆', 'comida'),
      new Producto('brocoli', '9', '🥦', 'comida'),
      new Producto('seta', '3', '🍄', 'comida'),
    ]
    this.bebida = [
      new Producto('ron', '12', '🥃', 'bebida'),
      new Producto('cocacola', '2', '🥤', 'bebida'),
      new Producto('cerveza', '9', '🍺', 'bebida'),
      new Producto('cocktail', '30', '🍹', 'bebida'),
      // [new Producto('café', '3', '☕', 'bebida')],
      // [new Producto('leche', '1', '🥛', 'bebida')],
      // [new Producto('té', '3', '🍵', 'bebida')],
      // [new Producto('martini', '14', '🍸', 'bebida')]
    ]
    this.postre = [
      new Producto('chocolate', '5', '🍫', 'bebida'),
      new Producto('tarta', '2', '🥧', 'bebida'),
      new Producto('donut', '9', '🍩', 'bebida'),
      new Producto('helado', '3', '🍨', 'bebida'),
      new Producto('galleta', '3', '🥠', 'bebida'),
      new Producto('flan', '2', '🍮', 'bebida'),
      new Producto('caramelo', '3', '🍬', 'bebida'),
      // [new Producto('cookie', '4', '🍪', 'bebida')]
    ]
  }
  
}
