import SeoHead from "@/components/layout/SeoHead";
import TwoRowFeatureSection from "@/components/common/TwoRowFeatureSection";
import CTASection from "@/components/sections/CTASection";
import FeatureCards from "@/components/sections/FeatureCards";
import { THEME } from "@/data/theme";
import Image from "next/image";

const PILL_SHADOW = "0px 4px 6px -4px #0000001A";

const productsSectionsData = [
  {
    sectionId: "at-the-source-farm-intelligence",
    variant: "variant1" as const,
    imageSrc: "/assets/products/products-1.png",
    imageAlt: "Designed for: Growers & Packers",
    eyebrowText: "Designed for: Growers & Packers",
    heading: "At the Source: Farm Intelligence",
    subheading: "The Objective: Digitizing the \"First Mile.\"",
    listItems: [
      {
        title: "Proprietary Vision Ingestion",
        description: "Converting analog field records and bin tags into digital assets via image capture.",
      },
      {
        title: "Edge-Sync Technology",
        description: "Ensuring data continuity and background synchronization in disconnected field environments.",
      },
      {
        title: "Compliance Mapping",
        description: "Directly translating harvest-level events into audit-ready data strings (KDEs/CTEs).",
      },
    ],
    bottomBoxHeading: "High-Level Focus",
    bottomBoxDescription: "We are currently collaborating with growers and packers to develop a \"Zero-Typing\" field interface. The goal is to capture high-fidelity data at the source without disrupting harvest velocity.",
  },
  {
    sectionId: "in-transit-movement-intake-intelligence",
    variant: "variant2" as const,
    imageSrc: "/assets/products/products-2.png",
    imageAlt: "Designed for: Shippers, Carriers & Distributors",
    eyebrowText: "Designed for: Shippers, Carriers & Distributors",
    heading: "In Transit: Movement & Intake Intelligence",
    subheading: "The Objective: Frictionless Data Orchestration.",
    listItems: [
      {
        title: "Intake Intelligence:",
        description: "Streamlining the ingestion of PDFs, emails, and spreadsheets to reconcile inbound data with existing ERP/TMS systems.",
      },
      {
        title: "Predictive Logistics:",
        description: "Exploring real-time shelf-life reasoning to assist in intelligent routing and waste avoidance.",
      },
      {
        title: "Pre-Arrival Guardrails:",
        description: "Automated verification of compliance data before a shipment reaches the receiving dock.",
      },
    ],
    bottomBoxHeading: "High-Level Focus",
    bottomBoxDescription: "Investigating how autonomous agents can bridge the gap between fragmented supplier records and enterprise logistics systems to eliminate the \"Manual Document Tax.\"",
  },
  {
    sectionId: "at-the-shelf-visibility-governance",
    variant: "variant1" as const,
    imageSrc: "/assets/products/products-3.png",
    imageAlt: "Designed for: Processors, Retailers & Food Safety Executives",
    eyebrowText: "Designed for: Processors, Retailers & Food Safety Executives",
    heading: "At the Shelf: Visibility & Governance",
    subheading: "The Objective: Brand Protection & Proactive Oversight.",
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
    bottomBoxHeading: "High-Level Focus",
    bottomBoxDescription: "Designing the \"God's Eye View\" of the multi-tier supply chain, allowing brands to isolate risks and verify quality with surgical precision.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <SeoHead
        title="Products | Tracerty"
        description="Tracerty products digitize first-mile operations and unify FSMA 204 traceability data across growers, packers, distributors, and retailers."
        canonicalPath="/products"
      />
      <section
        className="relative left-1/2 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: "url('/assets/products/banner.jpg')" }}
      >
        <div className="py-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(5px)" }}>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4">
          <div
            className="mb-7 inline-flex items-center gap-2 bg-transparent py-2 px-4 rounded-full"
            style={{ boxShadow: PILL_SHADOW }}
          >
            <Image src="/assets/icons/pointer.svg" alt="" width={12} height={12} aria-hidden />
            <span className="text-sm font-bold text-white font-oxygen">Product</span>
          </div>

          <h1 className="text-[40px] font-normal leading-tight text-white font-oxygen">
            {`The Intelligence Layer for the `}
          </h1>
          <h2 className="mb-6 text-[40px] font-bold leading-tight text-white font-oxygen">
            Global Food Supply Chain
          </h2>

          <p className="max-w-3xl text-base font-normal text-white font-inter">
            {`Bridging the first-mile data gap to transform mandatory compliance into a strategic asset for the food ecosystem.`}
          </p>
        </div>
        </div>
      </section>

      {productsSectionsData.map((section, index) => (
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
    </>
  );
}
