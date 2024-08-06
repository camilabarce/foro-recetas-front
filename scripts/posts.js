document.addEventListener('DOMContentLoaded', () => {
    const contenedorTarjetas = document.querySelector('.contenedor-tarjetas');

    Promise.all([
        fetch('http://localhost:3000/usuarios')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los usuarios');
                }
                return response.json();
            }),
        fetch('http://localhost:3000/recetas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener las recetas');
                }
                return response.json();
            })
    ]).then(([usuarios, recetas]) => {
        if (!Array.isArray(usuarios) || !Array.isArray(recetas)) {
            throw new Error('Datos no encontrados');
        }

        recetas.forEach(receta => {
            const usuario = usuarios.find(usuario => usuario.idusuario === receta.idusuario);

            const tarjetaHTML = `
                <div class="card d-flex flex-row tarjeta-receta">
                    <a href="./pages/receta.html" class="align-self-center">
                        <img src="http://localhost:3000${receta.imagen}" class="card-img-top img-receta" alt="${receta.titulo}">
                    </a>
                    <div class="card-body d-flex flex-column justify-content-around contenedor-receta-usuario">
                        <div class="receta-descripcion d-flex flex-column gap-3">
                            <a href="./pages/receta.html" class="text-decoration-none text-white">
                                <h5 class="card-title mb-3">${receta.titulo}</h5>
                                <h6 class="card-subtitle fw-light">${receta.subtitulo || ''}</h6>
                            </a>
                            <a href="pages/categorias.html" class="btn bg-dark-subtle rounded-5 mt-1 w-25">${receta.nombre_categoria || 'Categoría'}</a>
                        </div>
                        <div class="nav-link contenedor-usuario d-flex gap-2">
                            <img src="http://localhost:3000${usuario.imagen}" alt="imagen del usuario">
                            <span>${usuario.nombre}</span>
                            <i class="bi bi-caret-down-fill"></i>
                        </div>
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
