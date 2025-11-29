// src/components/ServiceFilters.tsx
import React from "react";
import type { ServiceCategory, MediaKind } from "../types/service";

interface ServiceFiltersProps {
  categoria: ServiceCategory | "Todas";
  medio: MediaKind | "Todos";
  onCategoriaChange: (value: ServiceCategory | "Todas") => void;
  onMedioChange: (value: MediaKind | "Todos") => void;
}

const categorias: (ServiceCategory | "Todas")[] = [
  "Todas",
  "Monitoreo",
  "Análisis",
  "Reportes",
];

const medios: (MediaKind | "Todos")[] = [
  "Todos",
  "Televisión",
  "Radio",
  "Prensa escrita",
  "Redes sociales",
];

const ServiceFilters: React.FC<ServiceFiltersProps> = ({
  categoria,
  medio,
  onCategoriaChange,
  onMedioChange,
}) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label className="block text-xs font-medium text-slate-700">
          Categoría
        </label>
        <select
          value={categoria}
          onChange={(e) =>
            onCategoriaChange(e.target.value as ServiceCategory | "Todas")
          }
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "Todas" ? "Todas las categorías" : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-xs font-medium text-slate-700">
          Medio
        </label>
        <select
          value={medio}
          onChange={(e) =>
            onMedioChange(e.target.value as MediaKind | "Todos")
          }
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {medios.map((m) => (
            <option key={m} value={m}>
              {m === "Todos" ? "Todos los medios" : m}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default ServiceFilters;
