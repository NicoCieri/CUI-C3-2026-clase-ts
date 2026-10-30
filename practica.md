# Práctica: Gestor de tareas con React + TypeScript

### HU-01 — Visualizar tareas

Como usuario, quiero ver una lista de tareas para conocer mis actividades.

- Mostrar al menos 3 tareas iniciales.
- Cada tarea debe tener ID, título y estado (completada o pendiente).

### RT-01 — Componente de listado

- Crear un componente `ListaTareas`.
- Recibir las tareas mediante props tipadas.
- Reutilizar el tipo `Tarea`.

### HU-02 — Agregar tareas

Como usuario, quiero agregar nuevas tareas a mi lista.

- Ingresar el título mediante un formulario.
- No permitir tareas vacías.
- Agregar la tarea como pendiente y limpiar el campo.

### RT-02 — Componente de formulario

- Crear un componente `FormularioTarea`.
- Manejar el estado del input dentro del formulario.
- Comunicar la nueva tarea a `App` mediante una función recibida por props.

### HU-03 — Completar tareas

Como usuario, quiero marcar mis tareas como completadas.

- Agregar un checkbox por tarea.
- Permitir marcar y desmarcar tareas.
- Actualizar el estado sin mutarlo directamente.

### HU-04 — Filtrar tareas

Como usuario, quiero visualizar únicamente mis tareas pendientes.

- Agregar una opción para mostrar solo pendientes.
- Permitir volver a visualizar todas las tareas.
- Mostrar la cantidad de tareas pendientes.

### Extra — Filtros avanzados

- Incorporar las opciones: Todas, Pendientes y Completadas.
- Tipar los valores posibles del filtro.
