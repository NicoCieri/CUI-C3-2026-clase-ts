import type { Tarea } from "./types.ts";
import { TareasList } from "./components/TareasList.tsx";
import { TareasForm } from "./components/TareasForm.tsx";
import { useState } from "react";

function App() {
  // Usamos un state para almacenar las tareas, con tipado explícito
  const [tareas, setTareas] = useState<Tarea[]>(
    // Inicializamos el state con un array de tareas de ejemplo
    [
      {
        id: 1,
        titulo: "Aprender TypeScript",
        completada: false,
      },
      {
        id: 2,
        titulo: "Aprender React",
        completada: false,
      },
      {
        id: 3,
        titulo: "Aprender React con TypeScript",
        completada: false,
      },
    ],
  );

  const agregarTarea = (title: string) => {
    // Forma recomendada, usando spread operator
    const newTarea: Tarea = {
      id: tareas.length + 1,
      titulo: title,
      completada: false,
    };
    // NUNCA mutamos el state directamente, sino que creamos un nuevo array con la nueva tarea
    setTareas([...tareas, newTarea]);
  };

  const onAlternarTarea = (id: number) => {
    const updatedTareas = tareas.map((tarea) =>
      // Usando operador ternario:
      // tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea

      // Usando if/else:
      {
        if (tarea.id === id) {
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      },
    );

    // NUNCA mutamos el state directamente, sino que creamos un nuevo array con la tarea actualizada
    setTareas(updatedTareas);
  };

  return (
    <div>
      <h1>Mis tareas</h1>

      <TareasForm agregarTarea={agregarTarea} />
      <TareasList tasks={tareas} onAlternarTarea={onAlternarTarea} />
    </div>
  );
}

export default App;
