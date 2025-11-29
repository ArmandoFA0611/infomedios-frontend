// src/components/OrderTable.tsx

import React from "react";
import type { Order } from "../types/order";

interface OrderTableProps {
  orders: Order[];
}

export const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
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
              Medio(s)
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
          {orders.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="px-4 py-6 text-center text-slate-400 text-sm"
              >
                No hay órdenes registradas todavía.
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-slate-100 hover:bg-slate-50 transition"
              >
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.cliente}</td>
                <td className="px-4 py-2">{order.medio}</td>
                <td className="px-4 py-2">
                  {order.fecha}
                </td>
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
            ))
          )}
        </tbody>
      </table>

      <div className="px-4 py-3 border-t border-slate-100 text-xs text-slate-500">
        Datos de prueba y órdenes creadas en los Sprints. La integración con
        una API real se realizará en fases posteriores.
      </div>
    </div>
  );
};
