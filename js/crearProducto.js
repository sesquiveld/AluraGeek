import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");



async function crearProducto(evento){
    evento.preventDefault();
    
    const nombre=document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;
    
    try{
        await conectaAPI.crearProducto(nombre,precio,imagen)
        alert("Producto creado correctamente");
    }catch(e){
        alert("Error al crear el producto");
    }
}

formulario,addEventListener("submit",evento=>crearProducto(evento));