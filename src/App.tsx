// src/App.tsx
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ServiceCatalogPage } from "./pages/ServiceCatalogPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Infomedios AFA
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Panel de monitoreo de medios • Proyecto académico
            </p>
          </div>

          <nav className="flex gap-2 text-sm">
            {[
              { to: "/", label: "Inicio" },
              { to: "/dashboard", label: "Dashboard" },
              { to: "/catalog", label: "Catálogo" },
              { to: "/register", label: "Registro" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition text-xs sm:text-sm ${
                    isActive
                      ? "bg-sky-600 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/catalog" element={<ServiceCatalogPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
