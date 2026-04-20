import { PropsWithChildren, useEffect, useState } from "react";

import HashScroll from "@/components/layout/HashScroll";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import BecomePartnerModal from "@/components/modals/BecomePartnerModal";
import ContactUsModal from "@/components/modals/ContactUsModal";
import { CONTACT_MODAL_EVENT } from "@/utils/contactModal";

export default function SiteLayout({ children }: PropsWithChildren) {
  const [isPartnerModalOpen, setPartnerModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenContactModal = () => setContactModalOpen(true);
    window.addEventListener(CONTACT_MODAL_EVENT, handleOpenContactModal);
    return () => {
      window.removeEventListener(CONTACT_MODAL_EVENT, handleOpenContactModal);
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-900">
      <SiteHeader onOpenPartnerModal={() => setPartnerModalOpen(true)} />
      <HashScroll />
      <main className="mx-auto w-full max-w-7xl px-[6vw] min-[1241px]:px-0">{children}</main>
      <SiteFooter />
      <BecomePartnerModal
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
