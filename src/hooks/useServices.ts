// src/hooks/useServices.ts
import { useEffect, useState } from "react";
import type { Service } from "../types/service";

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/services.json");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error cargando servicios:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { services, loading };
};
