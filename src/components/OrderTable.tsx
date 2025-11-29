import React from "react";

type Order = {
  id: number;
  cliente: string;
  medio: string;
  fecha: string;
  estado: "Pendiente" | "En proceso" | "Completada";
};

const dummyOrders: Order[] = [
  {
    id: 101,
    cliente: "Agencia Creativa Norte",
    medio: "Televisión",
    fecha: "2025-11-01",
    estado: "Pendiente",
  },
  {
    id: 102,
    cliente: "Marca XYZ",
    medio: "Redes sociales",
    fecha: "2025-11-02",
    estado: "En proceso",
  },
  {
    id: 103,
    cliente: "Gobierno Estatal",
    medio: "Prensa escrita",
    fecha: "2025-11-03",
    estado: "Completada",
  },
];

export const OrderTable: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50">
          <tr className="border-b border-slate-200">
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              ID
            </th>
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              Cliente
            </th>
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              Medio
            </th>
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              Fecha
            </th>
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map((order) => (
            <tr
              key={order.id}
              className="border-t border-slate-100 hover:bg-slate-50 transition"
            >
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.cliente}</td>
              <td className="px-4 py-2">{order.medio}</td>
              <td className="px-4 py-2">{order.fecha}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    order.estado === "Completada"
                      ? "bg-emerald-100 text-emerald-700"
                      : order.estado === "En proceso"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {order.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-4 py-3 border-t border-slate-100 text-xs text-slate-500">
        Datos de prueba para el Sprint 1. La integración con base de datos se
        realizará en Sprints posteriores.
      </div>
    </div>
  );
};
