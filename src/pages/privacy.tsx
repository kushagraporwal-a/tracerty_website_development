import SeoHead from "@/components/layout/SeoHead";
import { THEME } from "@/data/theme";
import { useEffect, useMemo, useState } from "react";

type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  trailingParagraphs?: string[];
};

const privacySections: PrivacySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      "At Tracerty, we value your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our platform.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    paragraphs: ["We may collect:"],
    bullets: [
      "User Information – Name, email, organization details",
      "Operational Data – Supply chain data, shipment details, traceability records",
      "Device & Usage Data – IP address, device type, browser data",
      "Captured Data Inputs – Images, voice inputs, and scanned records",
    ],
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Your Information",
    paragraphs: ["We use collected data to:"],
    bullets: [
      "Enable traceability and compliance workflows",
      "Improve platform performance and AI models",
      "Provide insights and analytics",
      "Communicate updates and support",
    ],
  },
  {
    id: "data-processing-intelligence",
    title: "4. Data Processing & Intelligence",
    paragraphs: [
      "Tracerty processes data using advanced technologies to generate actionable insights.",
      "This includes transforming raw inputs into structured, compliance-ready records.",
    ],
  },
  {
    id: "data-sharing",
    title: "5. Data Sharing",
    paragraphs: ["We do not sell personal data.", "We may share data with:"],
    bullets: [
      "Authorized partners for service delivery",
      "Regulatory authorities when required",
      "Internal teams for operational purposes",
    ],
  },
  {
    id: "data-security",
    title: "6. Data Security",
    paragraphs: ["We implement industry-standard security measures, including:"],
    bullets: ["Encryption", "Secure cloud infrastructure", "Access controls"],
    trailingParagraphs: [
      "However, no system is completely secure, and users should take precautions when sharing sensitive data.",
    ],
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    paragraphs: ["You have the right to:"],
    bullets: [
      "Access your data",
      "Request corrections",
      "Request deletion (subject to legal obligations)",
    ],
  },
  {
    id: "user-rights",
    title: "8. User Rights",
    paragraphs: ["You have the right to:"],
    bullets: [
      "Access your data",
      "Request corrections",
      "Request deletion (subject to legal obligations)",
    ],
  },
  {
    id: "cookies-tracking",
    title: "9. Cookies & Tracking",
    paragraphs: [
      "We may use cookies and similar technologies to enhance user experience and analyze platform usage.",
    ],
  },
  {
    id: "updates-privacy-policy",
    title: "10. Updates to Privacy Policy",
    paragraphs: [
      "This policy may be updated periodically. Continued use of the platform indicates acceptance of updates.",
    ],
  },
  {
    id: "contact-us",
    title: "11. Contact Us",
    paragraphs: ["For questions regarding this Privacy Policy, please contact us at:"],
  },
];

export default function PrivacyPage() {
  const [activeTocId, setActiveTocId] = useState<string>(privacySections[0].id);
  const tocItems = useMemo(() => privacySections, []);

  useEffect(() => {
    const sectionElements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveTocId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.5, 1] },
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <>
      <SeoHead
        title="Privacy Policy | Tracerty"
        description="Learn how Tracerty collects, uses, and protects your data when you use our platform."
        canonicalPath="/privacy"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-10">
          <article className="lg:col-span-7">
            <h1 className="mb-10 text-4xl font-bold font-oxygen" style={{ color: "#181A2A" }}>
              Privacy Policy
            </h1>

            <div className="space-y-10">
              {privacySections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="mb-5 text-2xl font-bold font-oxygen" style={{ color: "#181A2A" }}>
                    {section.title}
                  </h2>

                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={`${section.id}-paragraph-${index}`}
                      className="mb-4 text-xl font-normal leading-8 font-inter"
                      style={{ color: "#3B3C4A" }}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.id === "contact-us" ? (
                    <p className="mb-4 text-xl font-normal leading-8 font-inter" style={{ color: "#3B3C4A" }}>
                      <a href="mailto:hi@Tracerty.com" className="font-medium underline" style={{ color: THEME.colors.secondaryBlue }}>
                        hi@Tracerty.com
                      </a>
                    </p>
                  ) : null}

                  {section.bullets ? (
                    <ul
                      className="mb-4 list-disc space-y-2 pl-6 text-xl font-normal leading-8 font-inter"
                      style={{ color: "#3B3C4A" }}
                    >
                      {section.bullets.map((bullet, index) => (
                        <li key={`${section.id}-bullet-${index}`}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.trailingParagraphs?.map((paragraph, index) => (
                    <p
                      key={`${section.id}-trailing-${index}`}
                      className="mb-4 text-xl font-normal leading-8 font-inter"
                      style={{ color: "#3B3C4A" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </article>

          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 p-5">
              <h2 className="mb-[10px] text-[20px] font-bold font-oxygen" style={{ color: THEME.colors.blogTocText }}>
                In this Page
              </h2>
              <nav aria-label="Table of contents" className="space-y-2">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      const target = document.getElementById(item.id);
                      if (!target) return;
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`block w-full py-2 pl-4 text-left text-base font-inter transition ${
                      activeTocId === item.id ? "font-bold" : "font-normal"
                    }`}
                    style={{
                      color: THEME.colors.blogTocText,
                      backgroundColor: activeTocId === item.id ? THEME.colors.backgroundTone : "transparent",
                      borderLeft:
                        activeTocId === item.id ? `3px solid ${THEME.colors.blogTocActiveBorder}` : "3px solid transparent",
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
