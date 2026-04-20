import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "@/components/common/PrimaryButton";
import { THEME } from "@/data/theme";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setEmail("");
  };

  return (
    <footer
      className="pt-16"
      style={{
        backgroundColor: THEME.colors.footerBackground,
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-[6vw] min-[1241px]:px-0">
        <div className="mb-4 flex flex-col gap-8 py-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-sm">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/assets/footer/Logo-light.png"
                alt="Tracerty logo"
                width={248}
                height={60}
                className="mb-2"
              />
            </Link>
            <p className="text-sm" style={{ color: THEME.colors.footerMutedText }}>
              Future-proof, Agentic, Seamless, Verified, Intellligent
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:w-full lg:max-w-2xl lg:grid-cols-3">
            <div>
              <p className="mb-4 text-base font-semibold text-white">Company</p>
              <div className="space-y-2">
                <Link href="/about-us" className="block text-sm" style={{ color: THEME.colors.footerMutedText }}>
                  About
                </Link>
                <Link href="/industry-insight" className="block text-sm" style={{ color: THEME.colors.footerMutedText }}>
                  Industry Insight
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-white">Help</p>
              <div className="space-y-2">
                <Link href="/support" className="block text-sm" style={{ color: THEME.colors.footerMutedText }}>
                  Support
                </Link>
                <Link href="/terms" className="block text-sm" style={{ color: THEME.colors.footerMutedText }}>
                  Terms
                </Link>
                <Link href="/privacy" className="block text-sm" style={{ color: THEME.colors.footerMutedText }}>
                  Privacy
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-white">Platform</p>
              <div className="space-y-2">
                <Link href="/system" className="block text-sm" style={{ color: THEME.colors.footerMutedText }}>
                  System
                </Link>
                <Link href="/partners" className="block text-sm" style={{ color: THEME.colors.footerMutedText }}>
                  Partners
                </Link>
                <Link href="/contact-us" className="block text-sm" style={{ color: THEME.colors.footerMutedText }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr
          className="border-0 border-t"
          style={{ borderColor: THEME.colors.footerDivider }}
        />

        <div className="py-4">
          <p className="mb-4 text-base font-semibold text-white">Stay Updated</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:gap-0">
            <div className="w-full sm:mr-1.5 sm:max-w-xs">
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full px-6 py-3 text-sm text-slate-900 outline-none"
                aria-label="Enter your email"
              />
              {error ? (
                <p className="mt-2 text-xs text-red-300" role="alert">
                  {error}
                </p>
              ) : null}
            </div>
            <PrimaryButton type="submit" className="w-full sm:w-auto">Get in Touch</PrimaryButton>
          </form>
        </div>

        <hr
          className="border-0 border-t"
          style={{ borderColor: THEME.colors.footerDivider }}
        />

        <div className="flex items-center justify-center py-4 text-center text-sm">
          <p
            style={{
              color: THEME.colors.footerMutedText,
            }}
          >
            © 2026 Tracerty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
