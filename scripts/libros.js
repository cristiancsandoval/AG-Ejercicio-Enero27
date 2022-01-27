import { url as endpoint } from "../api/url.js";

let contenedor = document.getElementById("libros");
const getLibros = async () => {
  const data = await fetch(endpoint);
  const libros = await data.json();
  
  console.log(libros);
  

  libros.forEach((libro) => {
    const { id, titulo, urlImg, descripcion, precio } = libro;
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
        `;
  });
};
//post
let buttonAdd = document.getElementById("agregar");

const addLibro = async () => {
  let libro = captureData();
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(libro),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};

let container = document.querySelector(".librosContainer");
//Delete
container.addEventListener("click", async (evento) => {
  const btnEliminar = evento.target.classList.contains("btn-danger");
  if (btnEliminar === true) {
    const id = evento.target.id;
    await fetch(endpoint + id, {
      method: "DELETE",
    });
  }
});
// modificar
const updateLibros = () => {
    let id
};
let modificar = document.getElementById("modificar")
modificar.addEventListener("click",async () => {
    const datosIngresados = captureData();
    const {url,nombre,correo,descripcion} = datosIngresados;
    if(url ==="" , nombre === "", correo === "", descripcion === "" ) //Preguntar por las comas en el if
    {
        alert("Llenar todos los campos")
    } else {
        const id = document.getElementById("inputId").value;
        console.log('dataMod', dataMod);
        await fetch(endpoint+id,{
            method:"PUT",
            body : JSON.stringify(dataMod),
            headers:{
                "Content-Type" :"application/json; charset=utf-8"
            }
        })
    }
})

// buscarPorTitulo

// Funciones de ayuda
const captureData = () => {
  //recolectar datos
  const titulo = document.getElementById("nombre");
  const descripcion = document.getElementById("descripcion");
  const urlImg = document.getElementById("urlImg");
  const autor = document.getElementById("autor");
  const editorial = document.getElementById("editorial");
  const precio = document.getElementById("precio");
  //Crear array
  let contenedor = { titulo, descripcion, urlImg, autor, editorial, precio };
  return contenedor;
};

buttonAdd.addEventListener("click", addLibro);

document.addEventListener("DOMContentLoaded", getLibros);
