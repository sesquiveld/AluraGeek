<p align="center"> Alura Geek </p>

<hr>

<p> Challenge 2 del programa Oracle One Education- Alura </p>
<p> Plataforma WEB para visualizar productos.</p>


##  Alura GEEK es una plataforma WEB que visualiza una lista de productos 

## Caracteristicas 
## Visualizar productos: Se visualiza una lista de productos, en donde se puede ver una imagen del producto, el nombre del producto, y el precio del producto
## Agregar Productos : Se pueden agregar productos a la lista, indicando el nombre, el precio y una dirección URL de la imagen que describe el producto
## Buscar Producto : Se puede hacer una busqueda de los productos, donde serán listados los que coincidan con dicha busqueda
## Eliminar Producto : En cada tarjeta se encuenta el icono de una papelera, en el que dando click se puede eliminar el producto y este desaparecerá de la lista de productos


## Tecnologias utilizadas en el proyecto
* Javascript
* NodeJS
* Json-server
* HTML
* CSS

## Consideraciones 
## Para almacenar los productos se utiliza un archivo .json (db.json), el cual utiliza un servidor json-server, que solo funciona de forma local y cuya dirección es http://localhost:3001/productos/, el servidor debe iniciarse con el comando:  npx json-server --watch db.json --port 3001, y cada Item tiene la siguiente estructura 
 {
      "id": 1,
      "nombre": "Tropper Clon",
      "precio": "99,99",
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_744330-MCO76944445577_062024-O.webp"
    },


