// Array de herramientas (esto lo podemos cargar más tarde desde el backend)
const herramientas = [
    { id: 1, nombre: 'Martillo', imagen: 'https://via.placeholder.com/150', ocupado: false },
    { id: 2, nombre: 'Destornillador', imagen: 'https://via.placeholder.com/150', ocupado: false },
    { id: 3, nombre: 'Sierra', imagen: 'https://via.placeholder.com/150', ocupado: false }
];

window.onload = function() {
    const herramientasDiv = document.getElementById('herramientas');
    herramientas.forEach(herramienta => {
        const div = document.createElement('div');
        div.classList.add('tool');
        div.innerHTML = `
            <img src="${herramienta.imagen}" alt="${herramienta.nombre}">
            <p>${herramienta.nombre}</p>
            <p>${herramienta.ocupado ? 'Ocupado' : 'Disponible'}</p>
            <button onclick="tomarHerramienta(${herramienta.id})">${herramienta.ocupado ? 'Ocupado' : 'Tomar herramienta'}</button>
        `;
        herramientasDiv.appendChild(div);
    });
};

function tomarHerramienta(id) {
    const nombre = prompt("Ingresa tu nombre:");
    fetch('https://herramientas-backend.glitch.me/tomar_herramienta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nombre })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload(); // Recargar la página para mostrar el cambio
    });
}

}
