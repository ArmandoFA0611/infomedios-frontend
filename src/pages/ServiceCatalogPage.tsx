// src/pages/ServiceCatalogPage.tsx

import React, { useMemo, useState } from "react";
import type { Service, ServiceCategory, MediaKind } from "../types/service";
import { ServiceCard } from "../components/ServiceCard";
import { ServiceFilters } from "../components/ServiceFilters";

const MOCK_SERVICES: Service[] = [
  {
    id: 1,
    nombre: "Monitoreo diario de noticiarios nacionales",
    descripcion:
      "Seguimiento de noticiarios de TV abierta y de paga con reporte de menciones y tono informativo.",
    categoria: "Monitoreo",
    medio: "Televisión",
    precioDesde: 8500,
    frecuencia: "Mensual",
  },
  {
    id: 2,
    nombre: "Monitoreo de radio matutina",
    descripcion:
      "Cobertura de programas de radio en horario matutino con alertas rápidas ante menciones críticas.",
    categoria: "Monitoreo",
    medio: "Radio",
    precioDesde: 5200,
    frecuencia: "Mensual",
  },
  {
    id: 3,
    nombre: "Reporte ejecutivo semanal",
    descripcion:
      "Síntesis gráfica de las principales menciones en medios con conclusiones y recomendaciones.",
    categoria: "Reportes",
    medio: "Prensa escrita",
    precioDesde: 4300,
    frecuencia: "Semanal",
  },
  {
    id: 4,
    nombre: "Análisis de conversación en redes sociales",
    descripcion:
      "Análisis de sentimiento, principales hashtags, influencers y alcance de las conversaciones.",
    categoria: "Análisis",
    medio: "Redes sociales",
    precioDesde: 9600,
    frecuencia: "Campaña",
  },
  {
    id: 5,
    nombre: "Monitoreo especial por crisis",
    descripcion:
      "Cobertura intensiva 24/7 en múltiples medios durante una situación de crisis reputacional.",
    categoria: "Monitoreo",
    medio: "Televisión",
    precioDesde: 15000,
    frecuencia: "Único",
  },
];

export const ServiceCatalogPage: React.FC = () => {
  const [categoria, setCategoria] = useState<ServiceCategory | "Todas">(
    "Todas"
  );
  const [medio, setMedio] = useState<MediaKind | "Todos">("Todos");

  const filteredServices = useMemo(() => {
    return MOCK_SERVICES.filter((service) => {
      const matchCategoria =
        categoria === "Todas" || service.categoria === categoria;
      const matchMedio = medio === "Todos" || service.medio === medio;
      return matchCategoria && matchMedio;
    });
  }, [categoria, medio]);

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
          una orden de monitoreo.
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
