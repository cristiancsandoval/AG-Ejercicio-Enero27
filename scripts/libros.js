import {url as endpoint} from "../api/url.js"


let contenedor = document.getElementById("libros")
const addLibro = async () => {
    let libro = addLibros()
    await fetch(endpoint, { 
    method: 'POST',
    body: JSON.stringify(libro),
    headers: {
        "Content-Type" : "application/json; charset=utf-8"
    }
})}
const getLibros = async () => {
    const data = await fetch(endpoint);
    const libros = await data.json();
    libros.forEach(libro => {
        const {id,titulo,urlImg,descripcion,precio} = libro;
        console.log(titulo);
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${urlImg}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${precio}</p>
          <p class="card-text">${descripcion}</p>
          <a href="#" id=${id} class="btn btn-danger">Eliminar</a>
        </div>
    </div>
        `
    });
}
let container = document.querySelector(".librosContainer")
container.addEventListener("click", async (evento)=>{
    const btnEliminar = evento.target.classList.contains("btn-danger");
    if(btnEliminar === true){
        const id = evento.target.id;
        await fetch(endpoint+id,{
            method: 'DELETE'
        })
            
        }
})



let buttonAdd = document.getElementById("agregar");
buttonAdd.addEventListener("click",addLibro)



const addLibros = () => {
    //recolectar datos
    const titulo = document.getElementById("nombre")
    const descripcion = document.getElementById("descripcion")
    const urlImg = document.getElementById("urlImg")
    const autor = document.getElementById("autor")
    const editorial = document.getElementById("editorial")
    const precio = document.getElementById("precio")
    //Crear array
    let contenedor = {titulo,descripcion,urlImg,autor,editorial,precio};
    return contenedor;
}

const removeLibro = () => {
    let booleano = document.querySelector(".btn-danger")
}


const updateLibros = () => {}



document.addEventListener("DOMContentLoaded",getLibros);