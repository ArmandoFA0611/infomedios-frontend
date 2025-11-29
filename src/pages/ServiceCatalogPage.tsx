// src/pages/ServiceCatalogPage.tsx

import React, { useEffect, useMemo, useState } from "react";
import type { Service, ServiceCategory, MediaKind } from "../types/service";
import { ServiceCard } from "../components/ServiceCard";
import { ServiceFilters } from "../components/ServiceFilters";

export const ServiceCatalogPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [categoria, setCategoria] = useState<ServiceCategory | "Todas">(
    "Todas"
  );
  const [medio, setMedio] = useState<MediaKind | "Todos">("Todos");

  // Cargar servicios desde JSON mock (Sprint 3)
  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetch("/data/services.json");
        if (!res.ok) throw new Error("No se pudo cargar services.json");
        const data = (await res.json()) as Service[];
        setServices(data);
      } catch (error) {
        console.error(error);
        setServices([]);
      }
    };

    loadServices();
  }, []);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchCategoria =
        categoria === "Todas" || service.categoria === categoria;
      const matchMedio = medio === "Todos" || service.medio === medio;
      return matchCategoria && matchMedio;
    });
  }, [services, categoria, medio]);

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-xl font-semibold text-slate-800">
          Catálogo de servicios de monitoreo
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Esta vista corresponde a la historia de usuario <strong>PI5</strong>.
          Aquí el cliente puede explorar de manera visual los servicios de
          Infomedios, filtrando por categoría y tipo de medio antes de solicitar
          una orden de monitoreo. Los datos provienen de un archivo JSON
          simulado (mock) como se definió en el Sprint 3.
        </p>
      </header>

      <ServiceFilters
        categoria={categoria}
        medio={medio}
        onCategoriaChange={setCategoria}
        onMedioChange={setMedio}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <p className="text-xs text-slate-500 mt-4">
          No se encontraron servicios con los filtros seleccionados.
        </p>
      )}

      <p className="text-[11px] text-slate-400 mt-4">
        Datos simulados (mock) para el Sprint 3. La conexión con una API o base
        de datos real se realizaría en una fase posterior.
      </p>
    </section>
  );
};
