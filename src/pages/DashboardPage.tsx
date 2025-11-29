// src/pages/DashboardPage.tsx

import React, { useEffect, useState } from "react";
import { OrderTable } from "../components/OrderTable";
import { OrderForm } from "../components/OrderForm";
import { Notification } from "../components/Notification";
import type { Order } from "../types/order";

export const DashboardPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  // Cargar órdenes iniciales desde el mock JSON (Sprint 2)
  useEffect(() => {
    const loadOrders = async () => {
      try {
        const res = await fetch("/data/orders.json");
        if (!res.ok) throw new Error("No se pudo cargar orders.json");
        const data = (await res.json()) as Order[];
        setOrders(data);
      } catch (error) {
        console.error(error);
        // Fallback simple si falla el fetch
        setOrders([]);
        setNotification({
          message:
            "No se pudieron cargar las órdenes iniciales (mock). Trabajando solo en memoria.",
          type: "info",
        });
      }
    };

    loadOrders();
  }, []);

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
          notificaciones (PI4), conectadas a un archivo JSON de ejemplo.
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
