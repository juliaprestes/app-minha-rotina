import React, { useState } from "react";
import "../../../assets/css/toast.css";

export function ToastLayout() {
  const [toasts, setToasts] = useState<
    {
      severity: string;
      summary: string;
      detail: string;
    }[]
  >([]);
  document.addEventListener("toast", ((
    event: CustomEvent<{ severity: string; summary: string; detail: string }>
  ) => {
    event.preventDefault();
    setToasts([...toasts, event.detail]);
  }) as EventListener);

  return (
    <div className="toast">
      {toasts.map((toast) => {
        return <div className="toast-success">Login autenticado!</div>;
      })}
    </div>
  );
  return <></>;
}
