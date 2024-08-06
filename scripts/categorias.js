fetch('https://foro-recetas.up.railway.app/categorias')
  .then(response => response.json())
  .then(categorias => {
    const categoriesContainer = document.querySelector('.categories');

    categorias.forEach(categoria => {
      const li = `
      <li class="categoria-container">
        <div class="img-container" style="background-image: url('https://foro-recetas.up.railway.app${categoria.imagen}');"></div>
        <a href="" class="text-decoration-none d-flex justify-content-center align-items-center">
          <h3 class="fs-6 fw-light">${categoria.nombre}</h3>
        </a>
      </li>
    `;
      categoriesContainer.insertAdjacentHTML('beforeend', li);
    });
  })
  .catch(error => console.error('Error al cargar el JSON de categorías:', error));