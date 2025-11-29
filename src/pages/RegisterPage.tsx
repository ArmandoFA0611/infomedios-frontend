// src/pages/RegisterPage.tsx
import React from "react";

export const RegisterPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-start">
      <section className="bg-white rounded-2xl shadow-md shadow-slate-200/60 border border-slate-200/80 p-5 md:p-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">
          Registro de usuarios
        </h1>
        <p className="text-sm text-slate-600 mb-4">
          Esta pantalla cubre la historia de usuario PI2. Permite que un cliente
          de Infomedios se registre en el sistema. En este Sprint se valida el
          flujo básico desde el frontend.
        </p>

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-700">
              Nombre completo
            </label>
            <input
              type="text"
              className="mt-0.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-700">
              Correo electrónico
            </label>
            <input
              type="email"
              className="mt-0.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-700">
              Contraseña
            </label>
            <input
              type="password"
              className="mt-0.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <p className="text-[11px] text-slate-500">
            Recomendación: mínimo 6 caracteres. Las reglas de seguridad se
            reforzarán en Sprints posteriores.
          </p>

          <button
            type="button"
            className="mt-1 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition"
          >
            Registrarme
          </button>
        </form>
      </section>

      <section className="space-y-4 text-sm text-slate-600">
        <div className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl text-white p-5 shadow-md">
          <h2 className="text-base font-semibold mb-1">
            ¿Por qué un módulo de registro?
          </h2>
          <p className="text-xs md:text-sm text-sky-50/95">
            El registro permitirá que los clientes gestionen sus propias órdenes
            de monitoreo, consulten reportes históricos y configuren alertas
            personalizadas en futuros Sprints.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-1">
            Relación con Scrum
          </h3>
          <ul className="text-xs text-slate-600 space-y-1">
            <li>• Historia de usuario PI2 priorizada en Sprint 1.</li>
            <li>• Flujo básico validado en Sprint Review.</li>
            <li>• Mejora continua prevista en Sprints siguientes.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
