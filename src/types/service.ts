// src/types/service.ts

export type ServiceCategory = "Monitoreo" | "Análisis" | "Reportes";
export type MediaKind =
  | "Televisión"
  | "Radio"
  | "Prensa escrita"
  | "Redes sociales";

export interface Service {
  id: number;
  nombre: string;
  categoria: ServiceCategory;
  medio: MediaKind;
  descripcion: string;
  precioDesde: number;
  frecuencia: string;
}
