// src/pages/HomePage.tsx
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-8">
      {/* HERO */}
      <section className="grid gap-6 md:grid-cols-[1.6fr,1.4fr] items-stretch">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl text-white p-6 md:p-8 shadow-lg relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 opacity-20 pointer-events-none">
            <div className="h-full w-40 bg-[radial-gradient(circle_at_top,_white,_transparent)]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
            Bienvenido a Infomedios
          </h2>
          <p className="text-sm md:text-base text-sky-50/90 max-w-xl mb-4">
            Infomedios es un sistema web para monitorear medios (televisión, radio,
            prensa y redes sociales) y centralizar reportes para clientes.
            Este prototipo corresponde al desarrollo iterativo con metodología Scrum.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs border border-white/20">
              🧩 React + TypeScript
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs border border-white/20">
              🎯 Metodología Ágil Scrum
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs border border-white/20">
              📊 Proyecto académico
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <article className="bg-white rounded-2xl shadow-sm border border-slate-200/70 p-5 hover:shadow-md hover:-translate-y-0.5 transition">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Objetivo del Sprint 1
            </h3>
            <p className="text-sm text-slate-600">
              Entregar un primer prototipo funcional del panel interno y el registro de
              usuarios, que sirva como base para gestionar órdenes de monitoreo y
              futuras funcionalidades.
            </p>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-slate-200/70 p-5 hover:shadow-md hover:-translate-y-0.5 transition">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Historias de usuario activas
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• PI1: Panel interno para gestionar órdenes y reportes.</li>
              <li>• PI2: Registro de usuarios para clientes de Infomedios.</li>
              <li>• PI3: Creación de órdenes de monitoreo con criterios.</li>
              <li>• PI4: Sistema de notificaciones del estado de reportes.</li>
              <li>• PI5: Catálogo digital de servicios de monitoreo.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* TIMELINE SPRINTS */}
      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Sprint 1 · Fundamentos",
            body: "Estructura del proyecto, routing, página de inicio y registro básico de usuarios.",
          },
          {
            title: "Sprint 2 · Órdenes y notificaciones",
            body: "Creación de órdenes, tabla de control y sistema de notificaciones mock.",
          },
          {
            title: "Sprint 3 · Catálogo y refinamiento",
            body: "Catálogo filtrable de servicios, limpieza de código y ajustes de UI/UX.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200/70 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <h4 className="text-sm font-semibold text-slate-900 mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-slate-600">{item.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
