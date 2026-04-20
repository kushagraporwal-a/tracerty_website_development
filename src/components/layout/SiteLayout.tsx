import { PropsWithChildren, useState } from "react";

import HashScroll from "@/components/layout/HashScroll";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import BecomePartnerModal from "@/components/modals/BecomePartnerModal";

export default function SiteLayout({ children }: PropsWithChildren) {
  const [isPartnerModalOpen, setPartnerModalOpen] = useState(false);

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
    </div>
  );
}
