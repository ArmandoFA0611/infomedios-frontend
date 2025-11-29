// src/components/OrderForm.tsx

import React, { useState } from "react";
import type { FormEvent } from "react";
import type { Order } from "../types/order";

type MediaTag = "Televisión" | "Radio" | "Prensa escrita" | "Redes sociales";

interface OrderFormProps {
  onCreateOrder: (order: Order) => void;
}

const MEDIA_OPTIONS: MediaTag[] = [
  "Televisión",
  "Radio",
  "Prensa escrita",
  "Redes sociales",
];

export const OrderForm: React.FC<OrderFormProps> = ({ onCreateOrder }) => {
  const [cliente, setCliente] = useState("");
  const [palabrasClave, setPalabrasClave] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [mediosSeleccionados, setMediosSeleccionados] = useState<MediaTag[]>(
    []
  );
  const [errors, setErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleMedio = (medio: MediaTag) => {
    setMediosSeleccionados((prev) =>
      prev.includes(medio)
        ? prev.filter((m) => m !== medio)
        : [...prev, medio]
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(null);

    if (!cliente || !palabrasClave || !fechaInicio || !fechaFin) {
      setErrors("Por favor completa todos los campos obligatorios.");
      return;
    }

    if (fechaFin < fechaInicio) {
      setErrors("La fecha de fin no puede ser anterior a la fecha de inicio.");
      return;
    }

    if (mediosSeleccionados.length === 0) {
      setErrors("Selecciona al menos un tipo de medio para monitorear.");
      return;
    }

    setIsSubmitting(true);

    const nuevaOrden: Order = {
      id: Date.now(), // identificador simple para demo
      cliente,
      medio: mediosSeleccionados.join(", "),
      fecha: fechaInicio,
      estado: "Pendiente",
      palabrasClave,
      fechaInicio,
      fechaFin,
      creadaEl: new Date().toISOString(),
    };

    // Simulación de envío (como el mock order.json del sprint)
    setTimeout(() => {
      onCreateOrder(nuevaOrden);
      setIsSubmitting(false);

      // limpiar formulario
      setCliente("");
      setPalabrasClave("");
      setFechaInicio("");
      setFechaFin("");
      setMediosSeleccionados([]);
    }, 600);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 border border-slate-200 space-y-4"
    >
      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          Crear orden de monitoreo
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Esta forma representa la historia de usuario PI3: el cliente define
          criterios, fechas y medios para una nueva orden.
        </p>
      </div>

      {errors && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs text-red-800">
          {errors}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Cliente / área solicitante *
          </label>
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej: Dirección de Comunicación Social"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Fecha de inicio *
          </label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Fecha de fin *
          </label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Palabras clave / temas a monitorear *
          </label>
          <textarea
            value={palabrasClave}
            onChange={(e) => setPalabrasClave(e.target.value)}
            rows={2}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej: nombre del funcionario, programa, evento, hashtag..."
          />
        </div>

        <div className="md:col-span-2">
          <span className="block text-xs font-medium text-slate-700 mb-1">
            Medios a monitorear *
          </span>
          <div className="flex flex-wrap gap-2">
            {MEDIA_OPTIONS.map((medio) => {
              const active = mediosSeleccionados.includes(medio);
              return (
                <button
                  key={medio}
                  type="button"
                  onClick={() => toggleMedio(medio)}
                  className={`rounded-full px-3 py-1 text-xs font-medium border transition ${
                    active
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {medio}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-60"
        >
          {isSubmitting ? "Guardando orden…" : "Crear orden"}
        </button>
      </div>
    </form>
  );
};
