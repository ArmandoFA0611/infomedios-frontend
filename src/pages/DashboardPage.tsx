// src/pages/DashboardPage.tsx

import React, { useState } from "react";
import { OrderTable } from "../components/OrderTable";
import { OrderForm } from "../components/OrderForm";
import { Notification } from "../components/Notification";
import type { Order } from "../types/order";

const initialOrders: Order[] = [
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

export const DashboardPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const handleCreateOrder = (order: Order) => {
    // agregamos la nueva orden al inicio (más reciente arriba)
    setOrders((prev) => [order, ...prev]);

    setNotification({
      message: "Orden de monitoreo creada correctamente (PI3 / Sprint 2).",
      type: "success",
    });
  };

  return (
    <section className="space-y-6 relative">
      <header className="space-y-1">
        <h2 className="text-xl font-semibold text-slate-800">
          Panel interno · Órdenes de monitoreo
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Esta vista representa el trabajo del{" "}
          <span className="font-semibold">administrador</span> de Infomedios,
          quien consulta y gestiona las órdenes de monitoreo. A partir del
          Sprint 2 se incorpora la creación de órdenes reales (PI3) y el uso de
          notificaciones (PI4).
        </p>
      </header>

      <OrderForm onCreateOrder={handleCreateOrder} />

      <OrderTable orders={orders} />

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </section>
  );
};
