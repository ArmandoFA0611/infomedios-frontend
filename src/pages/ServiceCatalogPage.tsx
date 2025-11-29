// src/pages/ServiceCatalogPage.tsx
import React, { useMemo, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import ServiceFilters from "../components/ServiceFilters";
import { useServices } from "../hooks/useServices";
import type { ServiceCategory, MediaKind } from "../types/service";

export const ServiceCatalogPage: React.FC = () => {
  const { services, loading } = useServices();

  const [categoria, setCategoria] = useState<ServiceCategory | "Todas">(
    "Todas"
  );
  const [medio, setMedio] = useState<MediaKind | "Todos">("Todos");

  const filtered = useMemo(
    () =>
      services.filter((service) => {
        const matchCategoria =
          categoria === "Todas" || service.categoria === categoria;
        const matchMedio = medio === "Todos" || service.medio === medio;
        return matchCategoria && matchMedio;
      }),
    [services, categoria, medio]
  );

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-center text-slate-600">
          Cargando servicios de monitoreo...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-5">
      <header className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          Catálogo de servicios de monitoreo
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Explora los servicios disponibles y filtra por categoría y tipo de
          medio para armar la mejor estrategia de monitoreo para tus clientes.
        </p>
      </header>

      <ServiceFilters
        categoria={categoria}
        medio={medio}
        onCategoriaChange={setCategoria}
        onMedioChange={setMedio}
      />

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-slate-500">
          No se encontraron servicios con los filtros seleccionados.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};
