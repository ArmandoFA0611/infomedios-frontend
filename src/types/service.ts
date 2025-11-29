// src/types/service.ts

export type ServiceCategory = "Monitoreo" | "Análisis" | "Reportes";
export type MediaKind = "Televisión" | "Radio" | "Prensa escrita" | "Redes sociales";
export type ServiceFrequency = "Único" | "Mensual" | "Campaña" | "Semanal";

export interface Service {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: ServiceCategory;
  medio: MediaKind;
  precioDesde: number; // precio base de referencia
  frecuencia: ServiceFrequency;
}
