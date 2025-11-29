// src/types/service.ts

// 🔹 Tipos para los filtros del catálogo
export type ServiceCategory =
  | "Monitoreo"
  | "Reportes"
  | "Análisis"
  | "Especial"
  | "Otro";

export type MediaKind =
  | "Televisión"
  | "Radio"
  | "Prensa escrita"
  | "Redes sociales"
  | "Multicanal";

// 🔹 Tipo principal de servicio
export interface Service {
  id: number;

  // nombres "en español"
  nombre?: string;
  categoria?: string;
  medio?: string;
  descripcion?: string;
  precioDesde?: number;
  frecuencia?: string;

  // nombres "en inglés" (por si vienen así del JSON / API)
  name?: string;
  category?: string;
  medium?: string;
  description?: string;
  priceFrom?: number;
  price?: number;
  frequency?: string;
}
