export const CONTACT_MODAL_EVENT = "tracerty:open-contact-modal";

export function openContactUsModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONTACT_MODAL_EVENT));
}
