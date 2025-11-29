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

export const ServiceFilters: React.FC<ServiceFiltersProps> = ({
  categoria,
  medio,
  onCategoriaChange,
  onMedioChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-end mb-4">
      <div className="flex-1">
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Categoría
        </label>
        <select
          value={categoria}
          onChange={(e) =>
            onCategoriaChange(e.target.value as ServiceCategory | "Todas")
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "Todas" ? "Todas las categorías" : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Tipo de medio
        </label>
        <select
          value={medio}
          onChange={(e) =>
            onMedioChange(e.target.value as MediaKind | "Todos")
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {medios.map((m) => (
            <option key={m} value={m}>
              {m === "Todos" ? "Todos los medios" : m}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
