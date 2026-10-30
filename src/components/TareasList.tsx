import type { Tarea } from "../types";
import { getTareaTitle } from "../utils";

interface TareasListProps {
  tasks: Tarea[];
  onAlternarTarea: (id: number) => void;
}

export const TareasList = ({ tasks, onAlternarTarea }: TareasListProps) => {
  return (
    <ul>
      {tasks.map((task: Tarea) => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completada}
              onChange={() => onAlternarTarea(task.id)}
            />
            {getTareaTitle(task)}
          </label>
        </li>
      ))}
    </ul>
  );
};
