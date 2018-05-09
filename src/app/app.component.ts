import { Component, OnInit } from '@angular/core';
import { Producto } from '../app/classProducto';
import { PRODUCTOS } from './productos.db'
import { ProductosService } from './productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductosService]
})
export class AppComponent implements OnInit {
  title = 'app';

  comida: Array<any>
  bebida: Array<any>
  postre: Array<any>
  listaProductos: Array<any>

  constructor(private productosService: ProductosService) {
    this.comida = []
    this.bebida = []
    this.postre = []

    this.listaProductos = []
  }
  ngOnInit() {
    //Recuperamos el array de Comidas de la Promesa
    let promesaComida = this.productosService.getProductosByTipo('comida')
    promesaComida.then((arrProductosComida) => {
      this.comida = arrProductosComida
    })
    //Recuperamos el array de Bebidas de la Promesa
    let promesaBebida = this.productosService.getProductosByTipo('bebida')
    promesaBebida.then((arrProductosBebida) => {
      this.bebida = arrProductosBebida
    })
    //Recuperamos el array de Postres de la Promesa
    let promesaPostre = this.productosService.getProductosByTipo('postre')
    promesaPostre.then((arrProductosPostre) => {
      this.postre = arrProductosPostre
    })

  }
  handleOnSend($event) {
    this.listaProductos.push($event)
    console.log(this.listaProductos);
  }
  handleOnBorrar($event) {
    this.listaProductos.splice((this.listaProductos.length - 1), 1)
    console.log(this.listaProductos)
  }

}
