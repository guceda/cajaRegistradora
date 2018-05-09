import { Producto } from './classProducto'

//fichero almacena el array de productos

export const PRODUCTOS:Array<Producto> = [

          new Producto('queso', '4', '🧀', 'comida'),
          new Producto('carne', '4', '🍖', 'comida'),
          new Producto('pollo', '2', '🍗', 'comida'),
          new Producto('filete', '9', '🥩', 'comida'),
          new Producto('hamburguesa', '12', '🍔', 'comida'),
          new Producto('patatas', '5', '🍟', 'comida'),
          new Producto('pizza', '9', '🍕', 'comida'),
          new Producto('taco', '3', '🌮', 'comida'),
   
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

          new Producto('limón', '4', '🍋', 'fruta'),
          new Producto('melón', '4', '🍈', 'fruta'),
          new Producto('sandía', '2', '🍉', 'fruta'),
          new Producto('cereza', '9', '🍒', 'fruta'),
          new Producto('uva', '12', '🍇', 'fruta'),
          new Producto('melocotón', '5', '🍑', 'fruta'),
          new Producto('coco', '9', '🥥', 'fruta'),
          new Producto('presa', '3', '🍓', 'fruta'),
]

