import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-products]");



export default function construyeCard(nombre, precio, imagen,id) {
    const producto = document.createElement("li");
    producto.className = "productos__item";

    producto.innerHTML = `<div class="card__imagen">
                            <img class="imagen" src="${imagen}" alt="${nombre}" >
                          </div>
                            <div>
                                <h3 class="card__nombre">${nombre}</h3>
                                <p class="card__precio">$ ${precio}</p>
                                <button class ="bote__borrar" data-id=${id}>
                                <img src="../img/trash.png" alt="logo trash" class="card__bote"/>
                                </button>
                            </div>`
    const botonBorrar = producto.querySelector(".bote__borrar");
    
    botonBorrar.addEventListener("click", async (evento) => {
    evento.preventDefault();
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este producto?");
    
    if (confirmacion) {
        try {
            await conectaAPI.eliminarProducto(id);
            producto.remove();  
            alert("Producto eliminado correctamente");
        } catch (error) {
            alert("Error al eliminar el producto");
        }
    }
});

    return producto;
}


async function listaProductos() {
    try{
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.nombre, element.precio, element.imagen, element.id)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}


listaProductos();