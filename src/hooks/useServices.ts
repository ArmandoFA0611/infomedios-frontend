// src/hooks/useServices.ts
import { useEffect, useState } from "react";
import type { Service } from "../types/service";

const SERVICES_API_URL = "http://localhost:3001/services";

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(SERVICES_API_URL);
        if (!res.ok) {
          throw new Error("Error al cargar servicios");
        }

        const data = (await res.json()) as any[];

        // 👇 normalizamos a nuestro shape "español"
        const normalized: Service[] = data.map((item) => ({
          id: item.id,
          nombre: item.nombre ?? item.name,
          categoria: item.categoria ?? item.category,
          medio: item.medio ?? item.medium,
          descripcion: item.descripcion ?? item.description,
          precioDesde:
            item.precioDesde ?? item.priceFrom ?? item.price ?? 0,
          frecuencia: item.frecuencia ?? item.frequency ?? "Mensual",
        }));

        setServices(normalized);
      } catch (err) {
        console.error("Error cargando servicios:", err);
        setError("No se pudieron cargar los servicios de monitoreo.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { services, loading, error };
};
