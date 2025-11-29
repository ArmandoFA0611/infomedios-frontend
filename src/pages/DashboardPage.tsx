import React from "react";
import { OrderTable } from "../components/OrderTable";

export const DashboardPage: React.FC = () => {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-xl font-semibold text-slate-800">
          Panel interno · Órdenes de monitoreo
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl mt-1">
          Esta vista representa el trabajo del{" "}
          <span className="font-semibold">administrador</span> de Infomedios,
          quien consulta y gestiona las órdenes de monitoreo. En este Sprint
          se muestra una tabla con datos simulados como primer incremento.
        </p>
      </header>

      <OrderTable />
    </section>
  );
};
