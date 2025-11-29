// src/types/order.ts

export type OrderStatus = "Pendiente" | "En proceso" | "Completada";

export interface Order {
  id: number;
  cliente: string;
  medio: string;      // resumen de medios seleccionados
  fecha: string;      // podemos usar la fecha de inicio
  estado: OrderStatus;

  // Campos extra para reflejar mejor PI3 (opcionales en la tabla)
  palabrasClave?: string;
  fechaInicio?: string;
  fechaFin?: string;
  creadaEl?: string;
}
