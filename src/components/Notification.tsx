// src/components/Notification.tsx

import React, { useEffect } from "react";

type NotificationType = "success" | "error" | "info";

interface NotificationProps {
  message: string;
  type?: NotificationType;
  onClose?: () => void;
  durationMs?: number;
}

export const Notification: React.FC<NotificationProps> = ({
  message,
  type = "success",
  onClose,
  durationMs = 3000,
}) => {
  useEffect(() => {
    if (!onClose) return;
    const timer = setTimeout(onClose, durationMs);
    return () => clearTimeout(timer);
  }, [onClose, durationMs]);

  const base =
    "fixed bottom-4 right-4 z-50 rounded-lg px-4 py-3 text-sm shadow-lg border flex items-center gap-2";

  const styles =
    type === "success"
      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
      : type === "error"
      ? "bg-red-50 border-red-200 text-red-800"
      : "bg-slate-50 border-slate-200 text-slate-800";

  return (
    <div className={`${base} ${styles}`}>
      <span>{message}</span>
      {onClose && (
        <button
          className="ml-2 text-xs underline underline-offset-2"
          onClick={onClose}
        >
          Cerrar
        </button>
      )}
    </div>
  );
};
