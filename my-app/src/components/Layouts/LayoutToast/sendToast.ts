export interface ToastData {
  severity: "success" | "error" | "warn" | "info";
  summary: string;
  detail?: string;
  lifeTime?: number;
}

export default function sendToast(detail: ToastData) {
  document.dispatchEvent(new CustomEvent<ToastData>("toast", { detail }));
}
