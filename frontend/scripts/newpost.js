document.addEventListener('DOMContentLoaded', () => {
    const categoriaSelect = document.getElementById('categoriaSelect');

    fetch('http://localhost:3000/categorias')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener las categorías');
            }
            return response.json();
        })
        .then(categorias => {
            if (!Array.isArray(categorias)) {
                throw new Error('Datos de categorías no encontrados');
            }

            categorias.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.idcategoria;
                option.textContent = categoria.nombre;
                categoriaSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al cargar las categorías:', error);
        });
});


document.getElementById('crearPost').addEventListener('keypress', function (e) {
    if (e.key == 13) {
        e.preventDefault();
    }
});

//------Etiquetas

// const ul = document.getElementById("etiquetas"),
//     input = document.getElementById("tagInput"),
//     contador = document.querySelector(".detalles span");

// let maxTag = 4;
// let tags = [];

// function createTag() {
//     ul.querySelectorAll("li").forEach(li => { li.remove() });
//     tags.slice().reverse().forEach(tag => {
//         let liTag = `<li class="list-group-item m-1" onclick="remove(this,'${tag}')">${tag} <i id="botonCerrar" class="bi bi-x-circle"></i></li>`;
//         ul.insertAdjacentHTML("afterbegin", liTag);
//         botonEtiqueta();
//     })
//     contadorTag();
// }

// function remove(element, tag) {
//     let index = tags.indexOf(tag);
//     tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
//     element.remove();
//     contadorTag();
// }

// function addTag(e) {
//     if (e.key == " " || e.key == ",") {
//         let tag = e.target.value.replaceAll(",", "").replaceAll(" ", "");
//         if (tag.length > 1 && !tags.includes(tag)) {
//             if (tags.length < maxTag) {
//                 tags.push(tag);
//                 createTag();
//             }
//         }
//         e.target.value = "";
//     }
// }

// input.addEventListener("keyup", addTag);

// function botonEtiqueta() {
//     const equis = document.getElementById("botonCerrar");

//     equis.parentElement.onmouseover = () => {
//         equis.className = "bi bi-x-circle-fill";
//         equis.parentElement.style.cursor = 'pointer';
//     };
//     equis.parentElement.onmouseout = () => {
//         equis.className = "bi bi-x-circle";
//     };
// }

// function reset() {
//     tags = [];
//     ul.innerHTML = '';
//     contadorTag();
// }

// document.getElementById("eliminar-etiqueta").addEventListener("click", reset);