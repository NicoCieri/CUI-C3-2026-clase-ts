import type { Tarea } from "./types";

//  utils.ts es un archivo donde podemos colocar funciones de utilidad
//  que no están directamente relacionadas con los componentes de React,
//  pero que pueden ser útiles en diferentes partes de nuestra aplicación.
//  Por ejemplo, podemos tener funciones para formatear fechas, validar datos, etc.

//  Al no tener un componente de React, no necesitamos la extensión .tsx,
//  podemos usar .ts directamente.

/**
 * Función de ejemplo que recibe una tarea y devuelve su título.
 * @param tarea - La tarea de la cual queremos obtener el título.
 * @returns El título de la tarea.
 */
export const getTareaTitle = (tarea: Tarea) => {
  return tarea.titulo;
};
