import SeoHead from "@/components/layout/SeoHead";
import InfoBoxesRow from "@/components/common/InfoBoxesRow";
import TwoRowFeatureSection from "@/components/common/TwoRowFeatureSection";
import Image from "next/image";
import { THEME } from "@/data/theme";
import { openContactUsModal } from "@/utils/contactModal";

const PILL_SHADOW = "0px 4px 6px -4px #0000001A";

const sustainabilitySectionsData = [
  {
    sectionId: "objective-verifiable-provenance",
    variant: "variant1" as const,
    imageSrc: "/assets/sustainability/sustainability-1.png",
    imageAlt: "Ethical Transparency",
    eyebrowText: "Ethical Transparency",
    heading: "The Objective: Verifiable Provenance.",
    subheading: "",
    listItems: [
      {
        title: "Deforestation Guardrails",
        description: "Seamlessly align with EUDR requirements through automated land-use verification.",
      },
      {
        title: "Ethical Integrity",
        description: "Establish an unbreakable digital record of labor provenance to protect your brand from systemic risk.",
      },
      {
        title: "Market Readiness",
        description: "Meet global sourcing standards with verified, primary data rather than paper-based promises.",
      },
    ],
    bottomBoxHeading: "Benefit to the Chain:",
    bottomBoxDescription: "We help you ensure that every product on your shelf is free from the shadow of deforestation or unethical labor.",
  },
  {
    sectionId: "objective-frictionless-data-orchestration",
    variant: "variant2" as const,
    imageSrc: "/assets/sustainability/sustainability-2.png",
    imageAlt: "Systemic Waste Avoidance",
    eyebrowText: "Systemic Waste Avoidance",
    heading: "The Objective: Frictionless Data Orchestration.",
    subheading: "",
    listItems: [
      {
        title: "Precision Inventory",
        description: "Implement FEFO logic to ensure produce moves through the chain at peak freshness.",
      },
      {
        title: "Targeted Isolation",
        description: "Prevent the mass destruction of safe food during recall events by isolating risks with surgical accuracy.",
      },
      {
        title: "Resource Stewardship",
        description: "Every calorie saved is a reduction in the unnecessary environmental load of the food system.",
      },
    ],
    bottomBoxHeading: "Benefit to the Chain:",
    bottomBoxDescription: "One-third of the world's food never reaches a plate. We help our partners recapture this lost value, ensuring that resources are not wasted.",
  },
  {
    sectionId: "real-data-vs-statistical-guesses",
    variant: "variant1" as const,
    imageSrc: "/assets/sustainability/sustainability-3.png",
    imageAlt: "Carbon Clarity (Scope 3)",
    eyebrowText: "Carbon Clarity (Scope 3)",
    heading: "Real Data vs. Statistical Guesses",
    subheading: "",
    listItems: [
      {
        title: "Supply Chain Visibility",
        description: "Investigating methods to gain granular, lot-level visibility into Tier 3 and Tier 4 suppliers.",
      },
      {
        title: "Risk Command Center",
        description: "A centralized dashboard for monitoring regulatory, safety, and ethical threats across the network.",
      },
      {
        title: "Automated Traceback",
        description: "Developing one-click readiness drills to meet the FDA's 24-hour response mandates.",
      },
    ],
    bottomBoxHeading: "Benefit to the Chain:",
    bottomBoxDescription: "Sustainability reporting is often crippled by \"proxy\" data. We capture real-world energy and input metrics at the source.",
  },
];

const sustainabilityImpactInfo = [
  {
    iconSrc: "/assets/sustainability/info-1.svg",
    iconAlt: "Environmental Legacy",
    title: "Environmental Legacy",
    description: "Direct reduction in CO2e by eliminating spoilage and transit inefficiencies.",
  },
  {
    iconSrc: "/assets/sustainability/info-2.svg",
    iconAlt: "Public Health",
    title: "Public Health",
    description: "Averting systemic illness through rapid, automated traceback and precision safety drills.",
  },
  {
    iconSrc: "/assets/sustainability/info-3.svg",
    iconAlt: "Securing Grower Longevity",
    title: "Securing Grower Longevity",
    description: "Providing growers with the digital tools to prove their value in a global, transparent market.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <SeoHead
        title="Sustainability | Tracerty"
        description="Tracerty sustainability workflows connect first-mile operational data with traceability and impact intelligence."
        canonicalPath="/sustainability"
      />
      <section
        className="relative left-1/2 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: "url('/assets/sustainability/banner.jpg')" }}
      >
        <div className="py-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(5px)" }}>
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4">
            <div
              className="mb-7 inline-flex h-9 items-center gap-1 rounded-full border border-white/30 px-4 py-2"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image src="/assets/icons/pointer.svg" alt="" width={20} height={20} aria-hidden />
              <span className="text-sm font-bold text-white font-oxygen">Sustainability</span>
            </div>

            <h1 className="text-[40px] font-normal leading-tight text-white font-oxygen">
              {`Beyond Compliance: `}
            </h1>
            <h2 className="mb-6 text-[40px] font-bold leading-tight text-white font-oxygen">
              A Healthier Planet Through Precision
            </h2>

            <p className="max-w-3xl text-base font-normal text-white font-inter">
              {`Moving from estimated "proxies" to primary truth. Tracerty turns lot-level data into a force for waste avoidance, carbon clarity, and ethical transparency.`}
            </p>
          </div>
        </div>
      </section>

      {sustainabilitySectionsData.map((section, index) => (
        <TwoRowFeatureSection
          key={`${section.heading}-${index}`}
          sectionId={section.sectionId}
          variant={section.variant}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          eyebrowText={section.eyebrowText}
          heading={section.heading}
          subheading={section.subheading}
          listItems={section.listItems}
          bottomBoxHeading={section.bottomBoxHeading}
          bottomBoxDescription={section.bottomBoxDescription}
        />
      ))}

      <section
        id="our-collective-impact"
        className="relative left-1/2 mt-10 w-screen -translate-x-1/2 scroll-mt-28"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <div className="mx-auto w-full max-w-7xl" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
              <h2 className="text-4xl font-bold font-oxygen">
                Our Collective Impact
              </h2>
              <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
            </div>

            <h3 className="mb-6 text-2xl font-bold font-oxygen" style={{ color: "#101828" }}>
              The Objective: A Healthier, Safer Ecosystem.
            </h3>

            <p className="text-base font-normal font-inter" style={{ color: "#0B1F33" }}>
              {`The Vision: Our goal is a systemic improvement in how the world feeds itself-a dividend that benefits the environment, public health, and the people who power the first mile.`}
            </p>
          </div>

          <InfoBoxesRow className="mt-4" items={sustainabilityImpactInfo} />

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:opacity-90 font-oxygen"
              onClick={openContactUsModal}
            >
              Join the Mission
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
