// src/pages/DashboardPage.tsx
import React, { useEffect, useState } from "react";
import OrderTable from "../components/OrderTable";
import OrderForm from "../components/OrderForm";
import Notification from "../components/Notification";
import type { Order, OrderInput } from "../types/order";

const ORDERS_API_URL = "http://localhost:3001/orders";

export const DashboardPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        setLoading(true);
        const res = await fetch(ORDERS_API_URL);
        if (!res.ok) {
          throw new Error("Error al cargar órdenes");
        }
        const data = (await res.json()) as Order[];
        setOrders(data);
      } catch (error) {
        console.error("Error cargando órdenes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const handleCreateOrder = async (input: OrderInput) => {
    try {
      const res = await fetch(ORDERS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cliente: input.cliente,
          medio: input.medio,
          fecha: input.fecha,
          // estado inicial; debe coincidir con tu tipo Order["estado"]
          estado: "Pendiente",
        }),
      });

      if (!res.ok) {
        throw new Error("Error al crear la orden");
      }

      const created = (await res.json()) as Order;
      setOrders((prev) => [...prev, created]);
      setShowNotification(true);
    } catch (error) {
      console.error("Error creando orden:", error);
    }
  };

  const medios = ["Televisión", "Radio", "Prensa escrita", "Redes sociales"];

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-5">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Órdenes de monitoreo
        </h1>
        <p className="text-sm text-slate-600">
          Gestiona las órdenes activas y consulta su estado actual en tiempo real.
          En esta fase se usan datos almacenados en un servidor JSON simulado.
        </p>
      </header>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
        <div className="lg:sticky lg:top-24">
          <OrderForm onSubmit={handleCreateOrder} mediosDisponibles={medios} />
        </div>

        <div className="mt-4">
          {loading ? (
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Cargando órdenes...</p>
            </div>
          ) : (
            <OrderTable orders={orders} />
          )}
        </div>
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
