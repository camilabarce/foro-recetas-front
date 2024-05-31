fetch('../data/categorias.json')
  .then(response => response.json())
  .then(jsonData => {
    const categoriesContainer = document.querySelector('.categories');

    jsonData.categorias.forEach(categoria => {
      const li = `
      <li class="categoria-container">
        <div class="img-container" style="background-image: url('${categoria.imgUrl}');"></div>
        <a href="" class="text-decoration-none d-flex justify-content-center align-items-center">
          <h3 class="fs-6 fw-light">${categoria.nombre}</h3>
        </a>
      </li>
    `;
      categoriesContainer.insertAdjacentHTML('beforeend', li);
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));