import {url as endpoint} from "./url.js"
console.log(endpoint);
const getLibros = async () => {
    const data = await fetch(endpoint);
    const libros = await data.json();
    libros.forEach(libro => {
        const {titulo} = libro;
        console.log('titulo', titulo);
    });
}
const addLibros = () => {
    const nombre = document.getElementById("nombre")
    const descripcion = document.getElementById("descripcion")
    const url = document.getElementById("url")
    const autor = document.getElementById("autor")
    const editorial = document.getElementById("editorial")
    const precio = document.getElementById("precio")
}
const removeLibro = () => {}
const updateLibros = () => {}



document.addEventListener("DOMContentLoaded",getLibros);