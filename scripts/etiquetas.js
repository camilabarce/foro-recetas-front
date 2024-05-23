const ul = document.getElementById("etiquetas"),
input = document.getElementById("tagInput"),
contador = document.querySelector(".detalles span");

let maxTag = 4, tags = [];

contadorTag();

function contadorTag(){
    input.focus();
    contador.innerText = maxTag - tags.length;
}

function createTag(){
    ul.querySelectorAll("li").forEach(li => {li.remove()});
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li class="list-group-item m-1">${tag} <i class="bi bi-x-circle" onclick="remove(this,'${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin",liTag);
    })
    contadorTag();
}

function remove(element, tag){
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    contadorTag();
}

function addTag(e){
    if(e.key == " " || e.key == ","){
        let tag = e.target.value.replaceAll(",","").replaceAll(" ","");
        if(tag.length>1 && !tags.includes(tag)){
            if(tags.length < maxTag){
                tags.push(tag);
                createTag();
            }
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup",addTag);

function reset(){
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => {li.remove()});
    contadorTag();
}