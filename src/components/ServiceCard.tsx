// src/components/ServiceCard.tsx

import React from "react";
import type { Service } from "../types/service";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col gap-2">
      <header>
        <h3 className="text-sm font-semibold text-slate-800">
          {service.nombre}
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          {service.categoria} · {service.medio}
        </p>
      </header>

      <p className="text-xs text-slate-600 flex-1">
        {service.descripcion}
      </p>

      <div className="flex items-center justify-between text-xs mt-2">
        <span className="font-semibold text-indigo-700">
          Desde ${service.precioDesde.toLocaleString("es-MX")} MXN
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700">
          {service.frecuencia}
        </span>
      </div>
    </article>
  );
};
