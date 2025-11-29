// src/components/ServiceCard.tsx
import React from "react";
import type { Service } from "../types/service";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // 👇 Normalizamos los campos por si vienen en inglés o en español
  const nombre = service.nombre ?? service.name ?? "Servicio sin nombre";
  const categoria = service.categoria ?? service.category ?? "Sin categoría";
  const medio = service.medio ?? service.medium ?? "Todos los medios";
  const descripcion =
    service.descripcion ?? service.description ?? "Sin descripción disponible";

  const frecuencia =
    service.frecuencia ?? service.frequency ?? "Frecuencia a definir";

  // Precio: aceptamos precioDesde, priceFrom o price
  const rawPrice =
    service.precioDesde ?? service.priceFrom ?? service.price ?? 0;

  const formattedPrice = rawPrice.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col gap-2 hover:shadow-lg hover:-translate-y-0.5 hover:border-sky-200 transition">
      <header>
        <h3 className="text-sm font-semibold text-slate-900">{nombre}</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          {categoria} · {medio}
        </p>
      </header>

      <p className="text-xs text-slate-600 flex-1">{descripcion}</p>

      <div className="flex items-center justify-between text-xs mt-1">
        <span className="font-semibold text-sky-700">
          Desde {formattedPrice}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700">
          {frecuencia}
        </span>
      </div>
    </article>
  );
};

export default ServiceCard;
