// src/components/Notification.tsx
import React, { useEffect, useState } from "react";

export type NotificationType = "success" | "error" | "info";

interface NotificationProps {
  message: string;
  type?: NotificationType;
  onClose?: () => void;
}

const baseStyles =
  "fixed top-4 right-4 z-50 max-w-sm rounded-xl shadow-lg px-4 py-3 text-sm flex items-start gap-3 transition-all duration-500";

const typeStyles: Record<NotificationType, string> = {
  success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
  error: "bg-red-50 text-red-800 border border-red-200",
  info: "bg-sky-50 text-sky-800 border border-sky-200",
};

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "info",
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        setTimeout(onClose, 500); // espera a que termine la animación
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`${baseStyles} ${typeStyles[type]} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      <span className="mt-0.5">
        {type === "success" && "✅"}
        {type === "error" && "⚠️"}
        {type === "info" && "ℹ️"}
      </span>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
