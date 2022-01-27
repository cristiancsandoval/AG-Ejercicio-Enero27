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
const addLibros = () => {}
const removeLibro = () => {}
const updateLibros = () => {}



document.addEventListener("DOMContentLoaded",getLibros);