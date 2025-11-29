import React from "react";

export const HomePage: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-slate-800">
        Bienvenido a Infomedios
      </h2>

      <p className="text-sm text-slate-600 max-w-2xl">
        Infomedios es un sistema web para el monitoreo de medios
        (televisión, radio, prensa y redes sociales). Este prototipo
        corresponde al <span className="font-semibold">Sprint 1</span>, en el
        que se implementa un panel interno básico para el administrador y el
        flujo de registro de usuarios en React.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2">
            Objetivo del Sprint 1
          </h3>
          <p className="text-sm text-slate-600">
            Entregar un primer prototipo funcional del panel interno y el
            registro de usuarios, que sirva como base para gestionar órdenes
            de monitoreo y futuras funcionalidades.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2">
            Historias de usuario del Sprint
          </h3>
          <ul className="text-sm text-slate-600 list-disc pl-4 space-y-1">
            <li>
              <span className="font-semibold">PI1:</span> Panel interno para
              gestionar órdenes y reportes.
            </li>
            <li>
              <span className="font-semibold">PI2:</span> Registro de usuarios
              para clientes de Infomedios.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
