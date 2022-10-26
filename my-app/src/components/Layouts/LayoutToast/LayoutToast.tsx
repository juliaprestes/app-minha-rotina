import { useState } from "react";
import "../../../assets/css/toast.css";
import { ToastData } from "./sendToast";

function selectState(state: "success" | "error" | "warn" | "info") {
  switch (state) {
    case "success":
      return "toast-success";

    case "error":
      return "toast-error";

    case "warn":
      return "toast-warn";

    case "info":
      return "toast-info";
  }
}

export function ToastLayout() {
  let toasts: ToastData[] = [];
  const [reactToasts, setReactToasts] = useState(
    <div className="toasts"></div>
  );
  function update() {
    setReactToasts(
      // HTML do toast
      <div className="toasts">
        {toasts.map((toast, index) => {
          return (
            <div key={index} className={`toast ${selectState(toast.severity)}`}>
              <p>
                <b>{toast.summary}</b>
              </p>
              <p>{toast.detail}</p>
            </div>
          );
        })}
      </div>
    );
  }
  function toastCreteEvent(event: CustomEvent<ToastData>) {
    event.preventDefault();
    const thisToast: ToastData = event.detail;
    let varToasts: ToastData[] = toasts;
    varToasts.push(thisToast);
    toasts = varToasts;
    update();
    setTimeout(
      () => {
        let varToasts: ToastData[] = toasts;
        varToasts.splice(varToasts.indexOf(thisToast), 1);
        toasts = varToasts;
        update();
      },
      thisToast.lifeTime ? thisToast.lifeTime : 5000
    );
  }

  document.addEventListener("toast", ((event: CustomEvent<ToastData>) => {
    toastCreteEvent(event);
  }) as EventListener);

  return <>{reactToasts}</>;
}
