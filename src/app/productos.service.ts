import { Injectable } from '@angular/core';
import { Producto } from './classProducto'
import { PRODUCTOS } from './productos.db'

@Injectable()
export class ProductosService {

  getAllProductos():Promise<Array<Producto>>{
    let prom:Promise<Array<Producto>> = new Promise((resolve,reject)=>{
      resolve (PRODUCTOS)
    })
    return prom
  }

  getProductosByTipo(pTipo):Promise<Array<Producto>>{
    let prom:Promise<Array<Producto>> = new Promise((resolve, reject)=>{
      let resultado = PRODUCTOS.filter((prod)=>{
        return prod.tipo === pTipo
      })
      resolve (resultado)
    })
    return prom
  }
    

}
