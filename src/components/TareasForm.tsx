import { useState } from "react";
import type { SubmitEvent } from "react";

// Forma recomendada, con interfaces
interface TareasFormProps {
  agregarTarea: (titulo: string) => void;
}

// Alternativa con types
// type TareasFormProps = {
//   agregarTarea: (titulo: string) => void;
// }

// Alternativa sin tipado, no recomendable
// export const TareasForm = ({
//   agregarTarea,
// }: {
//   agregarTarea: (titulo: string) => void;
// }) => {

export const TareasForm = ({ agregarTarea }: TareasFormProps) => {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!titulo.trim()) return;

    agregarTarea(titulo);
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nueva tarea</label>
      <input
        type="text"
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
