fetch('http://localhost:3000/recetas')
.then(response => response.json())
.then(recetas => {
    console.log(recetas);
})
.catch(error => {
    console.error('Error al cargar las recetas:', error);
});