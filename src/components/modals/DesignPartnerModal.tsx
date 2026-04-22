import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import PrimaryButton from "@/components/common/PrimaryButton";
import { THEME } from "@/data/theme";

type DesignPartnerModalProps = {
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

const partnerHighlights = [
  {
    title: "Shape the Solution",
    description:
      "Direct the evolution of our AI to solve your operational friction points.",
  },
  {
    title: "Direct Access",
    description:
      "Work closely with our founding engineering team (ex-Google, Meta, Amazon).",
  },
  {
    title: "Early Advantage",
    description:
      "Deploy modern automation tools well before they become standard requirements.",
  },
  {
    title: "Founding Terms",
    description: "Secure exclusive status and preferential long-term pricing.",
  },
];

export default function DesignPartnerModal({
  isOpen,
  onClose,
}: DesignPartnerModalProps) {
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
    if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
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
    <div
      className="fixed inset-0 z-[110] flex items-start justify-center px-4 py-6 sm:items-center"
      style={{ backgroundColor: THEME.colors.modalBackdrop }}
    >
      <div
        className="max-h-[calc(100vh-3rem)] w-full max-w-7xl overflow-y-auto rounded-[20px] p-6 sm:p-10"
        style={{ backgroundColor: THEME.colors.textHeadingDark }}
      >
        <button
          type="button"
          onClick={onClose}
          className="ml-auto flex rounded-md p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
          aria-label="Close design partner modal"
        >
          <X size={20} />
        </button>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-4xl font-bold leading-tight text-white lg:text-[40px] font-oxygen">
              The Design Partner Program
            </h2>
            <p className="mb-5 text-lg font-normal text-white lg:text-[20px] font-inter">
              Tracerty is currently in its design phase. We are seeking
              forward-thinking growers, distributors, and retailers to help us
              shape our inaugural platform.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 relative">
              <div className="absolute w-full h-full flex justify-center items-center">
                <div className="w-1/2 h-full rounded-full bg-white/30" style={{filter: "blur(128px)"}}></div>
              </div>
              {partnerHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[14px] p-6"
                  style={{ backgroundColor: THEME.colors.whiteAlpha10 }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Image
                      src="/assets/icons/pointer.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden
                    />
                    <h3 className="text-lg font-bold text-white font-oxygen">{item.title}</h3>
                  </div>
                  <p className="text-sm font-normal text-white font-inter">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex justify-center items-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: THEME.colors.textHeadingLight }} />
              <h3 className="text-4xl font-bold font-oxygen" style={{ color: THEME.colors.textHeadingLight }}>
                Contact us
              </h3>
              <span className="h-px w-10" style={{ backgroundColor: THEME.colors.textHeadingLight }} />
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="partner-first-name"
                    className="mb-2 block text-sm font-medium font-oxygen"
                    style={{ color: THEME.colors.textLabelMuted }}
                  >
                    First name
                  </label>
                  <input
                    id="partner-first-name"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="First name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                  />
                  {errors.firstName ? (
                    <p className="mt-1 text-xs text-red-300">{errors.firstName}</p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="partner-last-name"
                    className="mb-2 block text-sm font-medium font-oxygen"
                    style={{ color: THEME.colors.textLabelMuted }}
                  >
                    Last name
                  </label>
                  <input
                    id="partner-last-name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Last name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                  />
                  {errors.lastName ? (
                    <p className="mt-1 text-xs text-red-300">{errors.lastName}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor="partner-email"
                  className="mb-2 block text-sm font-medium font-oxygen"
                  style={{ color: THEME.colors.textLabelMuted }}
                >
                  Email
                </label>
                <input
                  id="partner-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                />
                {errors.email ? (
                  <p className="mt-1 text-xs text-red-300">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="partner-phone-number"
                  className="mb-2 block text-sm font-medium font-oxygen"
                  style={{ color: THEME.colors.textLabelMuted }}
                >
                  Phone number
                </label>
                <div className="grid grid-cols-[120px_1fr] overflow-hidden rounded-lg border border-slate-300">
                  <select
                    className="border-r border-slate-300 bg-white px-3 py-3 text-base text-slate-900 outline-none"
                    value={countryCode}
                    onChange={(event) => setCountryCode(event.target.value)}
                    aria-label="Country code"
                  >
                    <option value="+1">US +1</option>
                    <option value="+91">IN +91</option>
                    <option value="+44">UK +44</option>
                  </select>
                  <input
                    id="partner-phone-number"
                    type="tel"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder="(555) 000-0000"
                    className="px-4 py-3 text-base text-slate-900 outline-none"
                  />
                </div>
                {errors.phoneNumber ? (
                  <p className="mt-1 text-xs text-red-300">{errors.phoneNumber}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="partner-message"
                  className="mb-2 block text-sm font-medium font-oxygen"
                  style={{ color: THEME.colors.textLabelMuted }}
                >
                  Message
                </label>
                <textarea
                  id="partner-message"
                  rows={3}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-red-300">{errors.message}</p>
                ) : null}
              </div>

              <label
                className="flex items-start gap-3 text-base font-normal font-oxygen"
                style={{ color: THEME.colors.textLabelMuted }}
              >
                <input
                  type="checkbox"
                  checked={acceptedPrivacy}
                  onChange={(event) => setAcceptedPrivacy(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900"
                />
                <span>You agree to our friendly privacy policy.</span>
              </label>
              {errors.privacy ? (
                <p className="-mt-2 text-xs text-red-300">{errors.privacy}</p>
              ) : null}

              <PrimaryButton type="submit" className="w-full">
                Send message
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
