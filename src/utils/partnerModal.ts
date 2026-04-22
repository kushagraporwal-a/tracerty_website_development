export const PARTNER_MODAL_EVENT = "tracerty:open-partner-modal";

export function openPartnerModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(PARTNER_MODAL_EVENT));
}
