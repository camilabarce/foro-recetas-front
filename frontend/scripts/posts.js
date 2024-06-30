document.addEventListener('DOMContentLoaded', () => {
    const contenedorTarjetas = document.querySelector('.contenedor-tarjetas');

    Promise.all([
        fetch('data/usuarios.json').then(response => response.json()),
        fetch('data/recetas.json').then(response => response.json())
    ]).then(([usuariosData, recetasData]) => {
        const usuarios = usuariosData.usuarios;
        const recetas = recetasData.recetas;

        recetas.forEach(receta => {
            const autor = usuarios.find(usuario => usuario.id === parseInt(receta.autorID));

            const tarjetaHTML = `
                <div class="card d-flex flex-row tarjeta-receta">
                    <a href="./pages/receta.html" class="align-self-center">
                        <img src="${receta.imagen}" class="card-img-top img-receta" alt="${receta.titulo}">
                    </a>
                    <div class="card-body d-flex flex-column justify-content-around contenedor-receta-usuario">
                        <div class="receta-descripcion">
                            <a href="./pages/receta.html" class="text-decoration-none text-white">
                                <h5 class="card-title">${receta.titulo}</h5>
                                <h6 class="card-subtitle fw-light">${receta.subtitulo || ''}</h6>
                            </a>
                            <a href="pages/categorias.html" class="btn bg-dark-subtle rounded-5 mt-1">${receta.categoria || 'Categoría'}</a>
                        </div>
                        <a href="pages/perfil.html" class="nav-link contenedor-usuario d-flex gap-2">
                            <img src="${autor.img}" alt="imagen del usuario">
                            <span>${autor.nombre} ${autor.apellido}</span>
                            <i class="bi bi-caret-down-fill"></i>
                        </a>
                    </div>
                    <a href="#like">
                        <img src="img/corazon.png" id="like" class="img-like">
                    </a>
                </div>
            `;

            contenedorTarjetas.innerHTML += tarjetaHTML;
        });
    }).catch(error => {
        console.error('Error al cargar los datos:', error);
    });
});
