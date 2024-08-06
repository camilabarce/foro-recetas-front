document.addEventListener('DOMContentLoaded', () => {
    const categoriaSelect = document.getElementById('categoriaSelect');

    fetch('https://foro-recetas.up.railway.app/categorias')
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

    let formulario = document.getElementById('crearPost');
    let titulo = document.getElementById('titulo');
    let subtitulo = document.getElementById('subtitulo');
    let ingredientes = document.getElementById('ingredientes');
    let pasos = document.getElementById('pasos');
    let imagen = document.getElementById('imagen');
    let categoria = document.getElementById('categoriaSelect');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        let url = 'https://foro-recetas.up.railway.app/recetas/nuevaReceta';
        let formData = new FormData();
        formData.append('titulo', titulo.value);
        formData.append('subtitulo', subtitulo.value);
        formData.append('imagen', imagen.files[0]);
        formData.append('pasos', pasos.value);
        formData.append('ingredientes', ingredientes.value);
        formData.append('idcategoria', categoria.value); // Asegúrate de que el nombre coincida con el backend
        // formData.append('idusuario', 1); Suponiendo que el ID del usuario es 1

        console.log('Enviando los siguientes datos:', Object.fromEntries(formData.entries()));

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al enviar la receta');
                }
                return response.json();
            })
            .then(data => {
                console.log('Receta agregada exitosamente:', data);
                // Aquí puedes redirigir al usuario, mostrar un mensaje de éxito, etc.
                // alert('Receta agregada exitosamente');
            })
            .catch(error => {
                console.error('Error al enviar la receta:', error);
                // Aquí puedes mostrar un mensaje de error al usuario
                // alert('Error al enviar la receta');
            });
    });
});