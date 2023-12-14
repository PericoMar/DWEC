window.addEventListener("load", () => {
    const tareaInput = document.getElementById("inputNewTask");
    const formularioTarea = document.getElementById("formCreateTask");
    const listaTareas = document.getElementById("taskList");
    const inputBuscar = document.getElementById("buscar");
    const botonCargarTareas = document.getElementById("botonCargarTareas");

    formularioTarea.addEventListener('submit', (ev) => {
        ev.preventDefault();
        crearTarea(tareaInput.value.trim());
        tareaInput.value = '';
    });

    function crearTarea(nombreTarea) {
        const nuevaTareaElemento = document.createElement('li');
        nuevaTareaElemento.className = 'list-group-item d-flex justify-content-between align-items-center';
        nuevaTareaElemento.textContent = nombreTarea;

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger fas fa-minus-circle';

        botonEliminar.addEventListener('click', () => {
            listaTareas.removeChild(nuevaTareaElemento);
        });

        nuevaTareaElemento.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTareaElemento);
    }

    tareaInput.addEventListener('keypress', (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            formularioTarea.dispatchEvent(new Event('submit'));
        }
    });

    inputBuscar.addEventListener('input', () => {
        const textoBuscado = inputBuscar.value.trim().toLowerCase();
        const tareas = listaTareas.querySelectorAll('li');

        tareas.forEach(tarea => {
            const textoTarea = tarea.textContent.toLowerCase(); // Obtener texto directamente de la tarea

            if (textoTarea.includes(textoBuscado)) {
                tarea.classList.remove('d-none');
            } else {
                tarea.classList.add('d-none');
            }
        });
    });

    inputBuscar.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') {
            inputBuscar.value = '';
        }
    });

    botonCargarTareas.addEventListener('click', () => {
        fetch('data/tareas.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    crearTarea(item.tarea);
                });
                botonCargarTareas.disabled = true;
            })
            .catch(error => console.error('Error al cargar tareas:', error));
    });

});



