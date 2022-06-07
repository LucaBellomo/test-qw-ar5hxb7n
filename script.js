window.addEventListener('load', () => {
    const marker = document.querySelector('#markerA');

    marker.addEventListener('markerFound', () => {
        alert('Hai trovato un mobile rosso!')
    });
})
