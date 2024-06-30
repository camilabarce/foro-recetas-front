const btn_menu = document.querySelector(".btn-menu");
const side_bar = document.querySelector(".sidebar");
const header_logo = document.getElementById("logoIndex");

btn_menu.addEventListener("click", function () {
    side_bar.classList.toggle("expand");
    changebtn();
});

function changebtn() {
    if (side_bar.classList.contains("expand")) {
        btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
        header_logo.hidden = true;
    } else {
        btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
        header_logo.hidden = false;
    }
}

function checkScreenWidth() {
    if (window.innerWidth <= 835) {
        side_bar.classList.remove("expand");
    } else {
        side_bar.classList.add("expand");
    }
}

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

changebtn();