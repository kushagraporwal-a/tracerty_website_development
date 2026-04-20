type BecomePartnerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BecomePartnerModal({
  isOpen,
  onClose,
}: BecomePartnerModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Become a Partner</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-700 transition hover:bg-slate-100"
            aria-label="Close partner modal"
          >
            Close
          </button>
        </div>
        <p className="mb-4 text-sm text-slate-600">
          Tell us about your organization and packaging goals. Our partnership
          team will contact you within two business days.
        </p>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Company name"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Work email"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <textarea
            placeholder="What kind of partnership are you exploring?"
            className="h-28 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Submit Interest
          </button>
        </form>
      </div>
    </div>
  );
}
