const ul = document.getElementById("etiquetas"),
    input = document.getElementById("tagInput"),
    contador = document.querySelector(".detalles span");

let maxTag = 4, tags = [];

contadorTag();

document.getElementById('crearPost').addEventListener('keypress', function (e) {
    if (e.key == 13) {
        e.preventDefault();
    }
});

function contadorTag() {
    input.focus();
    contador.innerText = maxTag - tags.length;
}

function createTag() {
    ul.querySelectorAll("li").forEach(li => { li.remove() });
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li class="list-group-item m-1" onclick="remove(this,'${tag}')">${tag} <i id="botonCerrar" class="bi bi-x-circle"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
        botonEtiqueta();
    })
    contadorTag();
}

function remove(element, tag) {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.remove();
    contadorTag();
}

function addTag(e) {
    if (e.key == " " || e.key == ",") {
        let tag = e.target.value.replaceAll(",", "").replaceAll(" ", "");
        if (tag.length > 1 && !tags.includes(tag)) {
            if (tags.length < maxTag) {
                tags.push(tag);
                createTag();
            }
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);

function botonEtiqueta() {
    const equis = document.getElementById("botonCerrar");

    equis.parentElement.onmouseover = () => {
        equis.className = "bi bi-x-circle-fill";
        equis.parentElement.style.cursor = 'pointer';
    };
    equis.parentElement.onmouseout = () => {
        equis.className = "bi bi-x-circle";
    };

}

function reset() {
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => { li.remove() });
    contadorTag();
}