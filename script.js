document.querySelector('button.anadirContenido').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    let skillLevel = prompt("Introduce el nivel de la habilidad:"); 
    if (newSkill && skillLevel) { 
        let table = document.querySelector('table'); 
        
        let row = table.insertRow(-1); 
        let cell1 = row.insertCell(0); 
        let cell2 = row.insertCell(1); 
        
        cell1.textContent = newSkill; // Establece el texto de la primera celda como la nueva habilidad
        cell2.textContent = skillLevel; // Establece el texto de la segunda celda como el nivel de la habilidad
    }
});


document.querySelector('input[type="submit"][value="Contactar"]').addEventListener('click', function() {
    // Prevenir la acción por defecto del botón de envío para asegurar que el alert tenga tiempo de mostrarse
    //event.preventDefault();
    
    let correo = prompt("Introduce tu correo electrónico");
    if(correo){
        alert("nos contactaremos con usted al correo "+ correo)
    }
});


document.getElementById('seccionExperiencia').addEventListener('click', saludoPersonalizado);

function saludoPersonalizado() {
    alert("¡Gracias por visitar mi sección de experiencia laboral!");
}
const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");

    // Continúa solicitando la calificación hasta que se ingrese un número válido del 1 al 10
    while (!calificacion || isNaN(calificacion) || calificacion < 1 || calificacion > 10) {
        // Si el valor ingresado no es un número o está fuera del rango, muestra un mensaje de error y solicita nuevamente
        calificacion = prompt("Por favor, ingresa un número válido del 1 al 10 para calificar mi hoja de vida.");
    }

    // Una vez validado el ingreso, agradece la calificación
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}


document.getElementById('btnCalifacarCV').addEventListener('click', calificarHojaDeVida);

//Añadir certificaciones
window.onload = mostrarCertificaciones;

function mostrarCertificaciones()  {
    // Array de certificaciones
    const certificaciones = [
      "Diplomado Inferencia Estadística A",
      "Curso Dimploamdo en Habilidades de programacion",
      "Probabilidad Básica",
      "Estructura de datos con python"
    ];
  
    // Crea un elemento <ul>
    const listaCertificaciones = document.createElement("ul");
  
    // Recorre el array de certificaciones y crea los <li>
    for (const certificacion of certificaciones) {
      const elementoLista = document.createElement("li");
      elementoLista.textContent = certificacion;
      listaCertificaciones.appendChild(elementoLista);
    }
  
    // Obtiene el nodo padre por su id
    let seccionCertificaciones = document.getElementById("seccionCertificaciones");
    
    // Agrega la lista completa al nodo padre
    seccionCertificaciones.appendChild(listaCertificaciones);
  };
  

