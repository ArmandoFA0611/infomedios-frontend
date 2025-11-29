// src/components/OrderForm.tsx
import React, { useState } from "react";
import type { OrderInput } from "../types/order";

interface OrderFormProps {
  onSubmit: (order: OrderInput) => void;
  mediosDisponibles: string[];
}

const OrderForm: React.FC<OrderFormProps> = ({
  onSubmit,
  mediosDisponibles,
}) => {
  const [form, setForm] = useState<OrderInput>({
    cliente: "",
    medio: "",
    fecha: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.cliente || !form.medio || !form.fecha) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setError("");
    onSubmit(form);

    setForm({
      cliente: "",
      medio: "",
      fecha: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md shadow-slate-200/60 rounded-2xl p-4 md:p-5 space-y-4 border border-slate-200/80"
    >
      <h2 className="text-sm font-semibold text-slate-900">
        Crear nueva orden
      </h2>

      <div className="space-y-1">
        <label className="block text-xs font-medium text-slate-700">
          Nombre del cliente
        </label>
        <input
          type="text"
          name="cliente"
          value={form.cliente}
          onChange={handleChange}
          className="mt-0.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          placeholder="Ej. Agencia XYZ"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-medium text-slate-700">
          Medio principal
        </label>
        <select
          name="medio"
          value={form.medio}
          onChange={handleChange}
          className="mt-0.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
        >
          <option value="">Selecciona un medio</option>
          {mediosDisponibles.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-medium text-slate-700">
          Fecha de inicio
        </label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          className="mt-0.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
        />
      </div>

      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <div className="pt-1">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow-md hover:from-sky-700 hover:to-indigo-700 transition"
        >
          Crear orden de monitoreo
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
