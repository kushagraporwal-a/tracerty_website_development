import { FormEvent, useEffect, useState } from "react";
import { X } from "lucide-react";

import PrimaryButton from "@/components/common/PrimaryButton";
import { THEME } from "@/data/theme";

type ContactUsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  privacy?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactUsModal({ isOpen, onClose }: ContactUsModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!EMAIL_REGEX.test(email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (!phoneNumber.trim()) nextErrors.phoneNumber = "Phone number is required.";
    if (!message.trim()) nextErrors.message = "Message is required.";
    if (!acceptedPrivacy) nextErrors.privacy = "Please accept the privacy policy.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 py-6">
      <div className="w-full max-w-3xl rounded-[14px] bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close contact form modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="mb-6 flex items-start justify-center gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
            <h2 className="text-3xl font-bold sm:text-4xl font-oxygen" style={{ color: "#0E1117" }}>
              Contact us
            </h2>
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="modal-first-name" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
                First name
              </label>
              <input
                id="modal-first-name"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="First name"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
              />
              {errors.firstName ? <p className="mt-1 text-xs text-red-600">{errors.firstName}</p> : null}
            </div>
            <div>
              <label htmlFor="modal-last-name" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
                Last name
              </label>
              <input
                id="modal-last-name"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Last name"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
              />
              {errors.lastName ? <p className="mt-1 text-xs text-red-600">{errors.lastName}</p> : null}
            </div>
          </div>

          <div>
            <label htmlFor="modal-email" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
              Email
            </label>
            <input
              id="modal-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="modal-phone-number" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
              Phone number
            </label>
            <div className="grid grid-cols-[120px_1fr] overflow-hidden rounded-lg border border-slate-200">
              <select
                className="border-r border-slate-200 bg-white px-3 py-3 text-base text-slate-900 outline-none"
                value={countryCode}
                onChange={(event) => setCountryCode(event.target.value)}
                aria-label="Country code"
              >
                <option value="+1">US +1</option>
                <option value="+91">IN +91</option>
                <option value="+44">UK +44</option>
              </select>
              <input
                id="modal-phone-number"
                type="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="(555) 000-0000"
                className="px-4 py-3 text-base text-slate-900 outline-none"
              />
            </div>
            {errors.phoneNumber ? <p className="mt-1 text-xs text-red-600">{errors.phoneNumber}</p> : null}
          </div>

          <div>
            <label htmlFor="modal-message" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
              Message
            </label>
            <textarea
              id="modal-message"
              rows={3}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
            />
            {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
          </div>

          <label className="flex items-start gap-3 text-base font-normal font-oxygen" style={{ color: "#344054" }}>
            <input
              type="checkbox"
              checked={acceptedPrivacy}
              onChange={(event) => setAcceptedPrivacy(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900"
            />
            <span className="font-oxygen">You agree to our friendly privacy policy.</span>
          </label>
          {errors.privacy ? <p className="-mt-2 text-xs text-red-600">{errors.privacy}</p> : null}

          <PrimaryButton type="submit" className="w-full">
            Send message
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
