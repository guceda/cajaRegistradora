import { Producto } from './classProducto'

//fichero almacena el array de productos

export const PRODUCTOS:Array<Producto> = [
          new Producto('uva', '4', '🍇', 'comida'),
          new Producto('melón', '4', '🍈', 'comida'),
          new Producto('sandía', '2', '🍉', 'comida'),
          new Producto('cereza', '9', '🍒', 'comida'),
          new Producto('aguacate', '12', '🥑', 'comida'),
          new Producto('berengena', '5', '🍆', 'comida'),
          new Producto('brocoli', '9', '🥦', 'comida'),
          new Producto('seta', '3', '🍄', 'comida'),
   
          new Producto('ron', '12', '🥃', 'bebida'),
          new Producto('cocacola', '2', '🥤', 'bebida'),
          new Producto('cerveza', '9', '🍺', 'bebida'),
          new Producto('cocktail', '30', '🍹', 'bebida'),
          new Producto('café', '3', '☕', 'bebida'),
          new Producto('leche', '1', '🥛', 'bebida'),
          new Producto('té', '3', '🍵', 'bebida'),
          new Producto('martini', '14', '🍸', 'bebida'),

          new Producto('chocolate', '5', '🍫', 'postre'),
          new Producto('tarta', '2', '🥧', 'postre'),
          new Producto('donut', '9', '🍩', 'postre'),
          new Producto('helado', '3', '🍨', 'postre'),
          new Producto('galleta', '3', '🥠', 'postre'),
          new Producto('flan', '2', '🍮', 'postre'),
          new Producto('caramelo', '3', '🍬', 'postre'),
          new Producto('cookie', '4', '🍪', 'postre'),
]

