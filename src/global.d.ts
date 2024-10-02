// src/global.d.ts
interface Window {
  dataLayer: Record<string, unknown>[];
  clarity: (action?: string, status?: boolean) => void;
}