// src/components/OrderTable.tsx
import React from "react";
import type { Order } from "../types/order";

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  if (!orders.length) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-4 mt-4">
        <p className="text-center text-slate-400 text-sm py-4">
          No hay órdenes registradas todavía.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mt-4">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Cliente</th>
            <th className="px-4 py-2 text-left">Medio</th>
            <th className="px-4 py-2 text-left">Fecha</th>
            <th className="px-4 py-2 text-left">Estado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-slate-50 transition">
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
        Órdenes almacenadas en un servidor JSON simulado (JSON Server) como
        parte del desarrollo iterativo por Sprints.
      </div>
    </div>
  );
};

export default OrderTable;
