import SeoHead from "@/components/layout/SeoHead";
import PrimaryButton from "@/components/common/PrimaryButton";
import { THEME } from "@/data/theme";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <>
      <SeoHead
        title="Contact Us | Tracerty"
        description="Get in touch with Tracerty to discuss product fit, implementation planning, and partnership opportunities."
        canonicalPath="/contact-us"
      />
      <section className="relative left-1/2 w-screen -translate-x-1/2" style={{ backgroundColor: "#F8F9FB" }}>
        <div className="mx-auto w-full max-w-7xl py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="grid h-fit content-start gap-4 md:grid-cols-2 p-6 ">
              <div className="p-6">
                <h1 className="mb-4 text-[40px] font-bold leading-tight font-oxygen" style={{ color: "#131313" }}>
                  {`We'd love to hear from you`}
                </h1>
                <p className="text-xl font-normal font-inter" style={{ color: "#131313" }}>
                  Need something cleared up?
                </p>
              </div>

              <article className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#EFF4F9" }}>
                <Image src="/assets/contactUs/info-1.svg" alt="Email icon" width={32} height={32} />
                <h2 className="mt-6 text-2xl font-bold font-oxygen" style={{ color: "#131313" }}>
                  Email
                </h2>
                <p className="mt-4 text-xl font-normal font-inter" style={{ color: "#131313" }}>
                  Our friendly team is here to help.
                </p>
                <a href="mailto:hi@Tracerty.com" className="mt-4 inline-block text-base font-medium font-oxygen" style={{ color: "#0047AB" }}>
                  hi@Tracerty.com
                </a>
              </article>

              <article className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#EFF4F9" }}>
                <Image src="/assets/contactUs/info-2.svg" alt="Phone icon" width={32} height={32} />
                <h2 className="mt-6 text-2xl font-bold font-oxygen" style={{ color: "#131313" }}>
                  Phone
                </h2>
                <p className="mt-4 text-xl font-normal font-inter" style={{ color: "#131313" }}>
                  Mon-Fri from 8am to 5pm.
                </p>
                <a href="tel:+15550000000" className="mt-4 inline-block text-base font-medium font-oxygen" style={{ color: "#0047AB" }}>
                  +1 (555) 000-0000
                </a>
              </article>

              <article className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#EFF4F9" }}>
                <Image src="/assets/contactUs/info-3.svg" alt="Office icon" width={32} height={32} />
                <h2 className="mt-6 text-2xl font-bold font-oxygen" style={{ color: "#131313" }}>
                  Office
                </h2>
                <p className="mt-4 text-xl font-normal font-inter" style={{ color: "#131313" }}>
                  Come say hello at our office HQ.
                </p>
                <a href="#" className="mt-4 inline-block text-base font-medium font-oxygen" style={{ color: "#0047AB" }}>
                  California
                </a>
              </article>
            </div>

            <div className="rounded-[14px] bg-white p-8" style={{ boxShadow: "0px 4px 8px 0px #00000026" }}>
              <div className="mb-8 flex items-center justify-center gap-3">
                <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
                <h2 className="text-4xl font-bold font-oxygen" style={{ color: "#0E1117" }}>
                  Contact us
                </h2>
                <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
              </div>

              <form className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
                    Phone number
                  </label>
                  <div className="grid grid-cols-[120px_1fr] overflow-hidden rounded-lg border border-slate-200">
                    <select className="border-r border-slate-200 bg-white px-3 py-3 text-base text-slate-900 outline-none">
                      <option value="+1">US +1</option>
                      <option value="+91">IN +91</option>
                      <option value="+44">UK +44</option>
                    </select>
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="px-4 py-3 text-base text-slate-900 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 font-oxygen">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Write your message..."
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                  />
                </div>

                <label className="flex items-start gap-3 text-base font-normal font-oxygen" style={{ color: "#344054" }}>
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900" />
                  <span>You agree to our friendly privacy policy.</span>
                </label>

                <PrimaryButton type="button" className="w-full">
                  Send message
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
