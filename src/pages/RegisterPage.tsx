import React, { useState } from "react";

export const RegisterPage: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de registro. En siguientes Sprints se conectará a BD / API.
    console.log("Nuevo usuario (simulado):", { nombre, correo });

    setMensaje(
      "Registro simulado correctamente. La conexión con base de datos y el hash de contraseña se implementarán en Sprints posteriores."
    );

    // Opcional: limpiar algunos campos
    // setNombre("");
    // setCorreo("");
    // setPassword("");
  };

  return (
    <section className="space-y-6 max-w-lg">
      <header>
        <h2 className="text-xl font-semibold text-slate-800">
          Registro de usuarios
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Esta pantalla cubre la historia de usuario PI2. Permite que un
          cliente de Infomedios se registre en el sistema. En este Sprint se
          valida el flujo básico de captura desde el frontend.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 space-y-4"
      >
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Nombre completo
          </label>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Correo electrónico
          </label>
          <input
            type="email"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Contraseña
          </label>
          <input
            type="password"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          <p className="text-xs text-slate-500">
            Recomendación: mínimo 6 caracteres. Las reglas de seguridad se
            reforzarán en Sprints posteriores.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          Registrarme
        </button>
      </form>

      {mensaje && (
        <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-2">
          {mensaje}
        </p>
      )}
    </section>
  );
};
