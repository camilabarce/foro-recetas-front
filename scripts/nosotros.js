fetch('../data/nosotros.json')
    .then(response => response.json())
    .then(jsonData => {
        const nosotrosContainer = document.querySelector('#nosotros-list');
        jsonData.nosotros.forEach(nosotros => {
            const li = `
            <li class="categoria-container nosotros-card">
                <div class="img-nos-container"><img src="${nosotros.img}"></div>
                <h4 class="fs-5 fw-lighter text-center pt-2">${nosotros.nombre}</h4>
                <div class="redes-container d-flex justify-content-center gap-4 pb-2">
                    <a href="${nosotros.linkedin}"><i class="bi bi-linkedin fs-4 bx-flashing-hover"></i></a>
                    <a href="${nosotros.github}"><i class="bi bi-github fs-4 bx-flashing-hover"></i></a>
                </div>
            </li>
        `;
            nosotrosContainer.insertAdjacentHTML('beforeend', li);
        });
    })