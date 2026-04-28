import SeoHead from "@/components/layout/SeoHead";
import { THEME } from "@/data/theme";
import { useEffect, useMemo, useState } from "react";

type TermsSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  trailingParagraphs?: string[];
};

const termsSections: TermsSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Welcome to Tracerty. By accessing or using our platform, you agree to comply with and be bound by these Terms & Conditions. These terms govern your use of our services, including data capture, traceability solutions, and analytics tools.",
    ],
  },
  {
    id: "use-of-services",
    title: "Use of Services",
    paragraphs: [
      "Tracerty provides supply chain intelligence solutions, including real-time data capture, traceability, and analytics.",
      "By using our services, you agree to:",
    ],
    bullets: [
      "Use the platform only for lawful business purposes",
      "Provide accurate and complete information",
      "Not misuse, disrupt, or attempt unauthorized access to the system",
    ],
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    paragraphs: ["Users are responsible for:"],
    bullets: [
      "Maintaining the confidentiality of their account credentials",
      "Ensuring the accuracy of data submitted through the platform",
      "Complying with applicable regulations (including food safety and traceability standards)",
    ],
  },
  {
    id: "data-accuracy",
    title: "Data & Accuracy",
    paragraphs: [
      "While Tracerty enables intelligent data processing and automation, users remain responsible for verifying critical operational data before decision-making.",
      "We do not guarantee:",
    ],
    bullets: [
      "Absolute accuracy of third-party or user-generated data",
      "Uninterrupted or error-free system performance",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "All content, technology, and software associated with Tracerty-including algorithms, designs, and interfaces-are the intellectual property of Tracerty.",
      "You may not:",
    ],
    bullets: [
      "Copy, modify, or distribute our technology",
      "Reverse engineer or attempt to extract source code",
    ],
  },
  {
    id: "service-availability",
    title: "Service Availability",
    paragraphs: [
      "We aim to ensure continuous availability but do not guarantee uninterrupted access. Maintenance, updates, or external factors may impact service performance.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    paragraphs: ["Tracerty shall not be liable for:"],
    bullets: [
      "Indirect or consequential losses",
      "Data loss caused by user actions or external systems",
      "Operational decisions made based on platform insights",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: ["We reserve the right to suspend or terminate access if:"],
    bullets: ["Terms are violated", "Misuse or fraudulent activity is detected"],
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of the platform constitutes acceptance of updated terms.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: ["These Terms shall be governed by applicable laws and regulations in the jurisdiction where Tracerty operates."],
  },
];

export default function TermsPage() {
  const [activeTocId, setActiveTocId] = useState<string>(termsSections[0].id);
  const tocItems = useMemo(() => termsSections, []);

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
        title="Terms & Conditions | Tracerty"
        description="Read Tracerty Terms & Conditions for platform usage, responsibilities, data accuracy, and service policies."
        canonicalPath="/terms"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-10">
          <article className="lg:col-span-7">
            <h1 className="mb-10 text-4xl font-bold font-oxygen" style={{ color: "#181A2A" }}>
              Terms & Conditions
            </h1>

            <div className="space-y-10">
              {termsSections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="mb-5 text-2xl font-bold font-oxygen" style={{ color: "#181A2A" }}>
                    {section.title}
                  </h2>

                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.id}-paragraph-${index}`} className="mb-4 text-xl font-normal leading-8 font-inter" style={{ color: "#3B3C4A" }}>
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets ? (
                    <ul className="mb-4 list-disc space-y-2 pl-6 text-xl font-normal leading-8 font-inter" style={{ color: "#3B3C4A" }}>
                      {section.bullets.map((bullet, index) => (
                        <li key={`${section.id}-bullet-${index}`}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.trailingParagraphs?.map((paragraph, index) => (
                    <p key={`${section.id}-trailing-${index}`} className="mb-4 text-xl font-normal leading-8 font-inter" style={{ color: "#3B3C4A" }}>
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
                    className={`block w-full py-2 text-left text-base font-inter transition pl-4 ${
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
