function generarHTMLProyecto(nombre, descripcion, caracteristicas, comoFunciona) {
    const caracteristicasHTML = caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join('');
  
    return `
      <div class="proyecto">
        <div class="section">
        <h2 class="nombreProyecto">Nombre del proyecto: ${nombre}</h2> 
          <h2>Descripción del Proyecto</h2>
          <p>${descripcion}</p>
        </div>
  
        <div class="section">
          <h2>Características</h2>
          <ul>
            ${caracteristicasHTML}
          </ul>
        </div>
  
        <div class="section">
          <h2>Cómo Funciona</h2>
          <p>${comoFunciona}</p>
        </div>
      </div>
    `;
  }
  
  // Suponiendo que tienes un elemento contenedor con id="contenedorProyectos"
  // Esta línea debería estar dentro de la función renderizarProyectos o comentada si no se usa fuera.
  
  function crearProyecto(nombre, descripcionDelProyecto, caracteristicas, comoFunciona) {
    return {
      nombre,
      descripcionDelProyecto,
      caracteristicas,
      comoFunciona
    };
  }
  
  var proyecto1 = crearProyecto('Booking', 'Desarrollo de una aplicación web', ['Interfaz amigable', 'Responsive design'], 'Permite a los usuarios realizar tareas X de manera eficiente');
  var proyecto2 = crearProyecto('Proyecto X', 'Automatización de procesos', ['Integración con APIs', 'Notificaciones en tiempo real'], 'Automatiza flujos de trabajo para reducir el tiempo de ejecución');
  var proyecto3 = crearProyecto('Git Travel', 'Plataforma de e-commerce', ['Carrito de compras', 'Pasarela de pagos segura'], 'Facilita la compra y venta de productos en línea');
  
  var listaDeProyectos = [proyecto1, proyecto2, proyecto3];
  
  function renderizarProyectos(numProyectosVer) {
    let i = 0;
    let htmlTotal = ''; // Inicializar la variable para acumular el HTML de todos los proyectos
    while (i < listaDeProyectos.length && i<= numProyectosVer) {
      const nombre = listaDeProyectos[i].nombre;
      const descripcion = listaDeProyectos[i].descripcionDelProyecto;
      const caracteristicas = listaDeProyectos[i].caracteristicas; 
      const comoFunciona = listaDeProyectos[i].comoFunciona;
  
      let nuevoNodo = generarHTMLProyecto(nombre, descripcion, caracteristicas, comoFunciona);
      htmlTotal += nuevoNodo; // Acumular el HTML de cada proyecto
      i++;
    }
  
    document.getElementById('contenedorProyectos').innerHTML = htmlTotal; // Asignar el HTML acumulado al contenedor
  }
  
 
  const Inicializar = () => {
    var numeroProyectos = prompt("Introduce la cantidad de proyectos que quieres ver");
  
    // Validar que la entrada sea un número. Repetir hasta que se introduzca un número válido.
    while (numeroProyectos === null || isNaN(numeroProyectos) || numeroProyectos <= 0) {
      // Si el usuario presiona "Cancelar", numeroProyectos será null
      if (numeroProyectos === null) {
        window.location.href = "index.html";
        break; // Salir del ciclo si el usuario cancela la entrada
      } else {
        // Mostrar un mensaje de error si la entrada no es un número o es un número no válido (por ejemplo, negativo)
        numeroProyectos = prompt("Introduce nuevamente la cantidad de proyectos que quieres ver");
      }
      
    }
    
    numeroProyectos = Number(numeroProyectos);
    renderizarProyectos(numeroProyectos-1)
   
  }
  




  window.onload = Inicializar;