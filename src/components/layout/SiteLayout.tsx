import { PropsWithChildren, useEffect, useState } from "react";

import HashScroll from "@/components/layout/HashScroll";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import ContactUsModal from "@/components/modals/ContactUsModal";
import DesignPartnerModal from "@/components/modals/DesignPartnerModal";
import { CONTACT_MODAL_EVENT } from "@/utils/contactModal";
import { PARTNER_MODAL_EVENT } from "@/utils/partnerModal";

export default function SiteLayout({ children }: PropsWithChildren) {
  const [isPartnerModalOpen, setPartnerModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenContactModal = () => setContactModalOpen(true);
    const handleOpenPartnerModal = () => setPartnerModalOpen(true);
    window.addEventListener(CONTACT_MODAL_EVENT, handleOpenContactModal);
    window.addEventListener(PARTNER_MODAL_EVENT, handleOpenPartnerModal);
    return () => {
      window.removeEventListener(CONTACT_MODAL_EVENT, handleOpenContactModal);
      window.removeEventListener(PARTNER_MODAL_EVENT, handleOpenPartnerModal);
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-900">
      <SiteHeader onOpenPartnerModal={() => setPartnerModalOpen(true)} />
      <HashScroll />
      <main className="mx-auto w-full max-w-7xl px-[6vw] min-[1241px]:px-0">{children}</main>
      <SiteFooter />
      <DesignPartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
