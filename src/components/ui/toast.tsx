"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type Toast = {
  id: number;
  message: string;
  exiting: boolean;
};

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

let toastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, exiting: false }]);

    // Start exit animation after 2.7s
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
      );
    }, 2700);

    // Remove after 3s (2.7s display + 0.3s exit animation)
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 left-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${
              toast.exiting ? "toast-exit" : "toast-enter"
            } pointer-events-auto`}
            style={{
              padding: "12px 24px",
              borderRadius: "9999px",
              backgroundColor: "var(--bg-primary)",
              color: "var(--label-primary)",
              fontWeight: 500,
              fontSize: 14,
              boxShadow: "var(--elevation-3)",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
