import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { RegisterPage } from "./pages/RegisterPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-indigo-700">
              Infomedios
            </h1>
            <p className="text-sm text-slate-500">
              Sistema de monitoreo de medios · Sprint 1
            </p>
          </div>

          <nav className="flex gap-4 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-indigo-600 ${
                  isActive ? "font-semibold text-indigo-700" : ""
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/panel"
              className={({ isActive }) =>
                `hover:text-indigo-600 ${
                  isActive ? "font-semibold text-indigo-700" : ""
                }`
              }
            >
              Panel interno
            </NavLink>
            <NavLink
              to="/registro"
              className={({ isActive }) =>
                `hover:text-indigo-600 ${
                  isActive ? "font-semibold text-indigo-700" : ""
                }`
              }
            >
              Registro de usuarios
            </NavLink>
          </nav>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/panel" element={<DashboardPage />} />
          <Route path="/registro" element={<RegisterPage />} />
        </Routes>
      </main>

      {/* FOOTER SIMPLE */}
      <footer className="border-t border-slate-200 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between">
          <span>Proyecto Infomedios · Metodología Scrum</span>
          <span>Sprint 1: Panel + Registro</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
