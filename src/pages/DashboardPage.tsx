// src/pages/DashboardPage.tsx
import React, { useEffect, useState } from "react";
import OrderTable from "../components/OrderTable";
import OrderForm from "../components/OrderForm";
import Notification from "../components/Notification";
import type { Order, OrderInput } from "../types/order";

export const DashboardPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const res = await fetch("/data/orders.json");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Error cargando órdenes:", error);
      }
    };

    loadOrders();
  }, []);

  const handleCreateOrder = (input: OrderInput) => {
    const newOrder: Order = {
      id: orders.length ? orders[orders.length - 1].id + 1 : 1,
      cliente: input.cliente,
      medio: input.medio,
      fecha: input.fecha,
      estado: "Pendiente",
    };

    setOrders((prev) => [...prev, newOrder]);
    setShowNotification(true);
  };

  const medios = ["Televisión", "Radio", "Prensa escrita", "Redes sociales"];

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-5">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Órdenes de monitoreo
        </h1>
        <p className="text-sm text-slate-600">
          Gestiona las órdenes activas y consulta su estado actual en tiempo
          real (datos mock para este Sprint).
        </p>
      </header>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
        <div className="lg:sticky lg:top-24">
          <OrderForm onSubmit={handleCreateOrder} mediosDisponibles={medios} />
        </div>
        <OrderTable orders={orders} />
      </section>

      {showNotification && (
        <Notification
          type="success"
          message="Orden creada correctamente."
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};
