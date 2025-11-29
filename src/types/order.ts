// src/types/order.ts

export type OrderStatus = "Pendiente" | "En proceso" | "Completada";

export interface Order {
  id: number;
  cliente: string;
  medio: string;
  fecha: string;
  estado: OrderStatus;
}

export interface OrderInput {
  cliente: string;
  medio: string;
  fecha: string;
}
