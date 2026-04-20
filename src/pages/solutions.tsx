import SeoHead from "@/components/layout/SeoHead";
import TwoRowFeatureSection from "@/components/common/TwoRowFeatureSection";
import Image from "next/image";

const PILL_SHADOW = "0px 4px 6px -4px #0000001A";

const solutionsSectionsData = [
  {
    sectionId: "at-the-source-secure-preferred-supplier-status",
    variant: "variant1" as const,
    imageSrc: "/assets/solutions/solutions-1.png",
    imageAlt: "Focus: Growers & Packers",
    eyebrowText: "Focus: Growers & Packers",
    heading: "At the Source: Secure Preferred Supplier Status",
    subheading: "The Objective: Frictionless Data Orchestration.",
    listItems: [
      {
        title: "Zero-Friction Compliance",
        description: "Eliminate the \"Compliance Tax\" with tools that work at the speed of the field.",
      },
      {
        title: "Minimized Rejections",
        description: "Use lot-level provenance to prove quality and handling, reducing costly \"chargebacks\" at the receiver's dock.",
      },
      {
        title: "Preferred Status",
        description: "Stand out to tier-one retailers as a digitally-ready, low-risk partner with a verified \"Golden Record\" of compliance history.",
      },
    ],
    bottomBoxHeading: "The Business Case:",
    bottomBoxDescription: "In an era of tightening regulations, compliance is the prerequisite for entry. We help you prove the \"truth\" of your harvest, ensuring high-quality produce isn't unfairly penalized by downstream data gaps.",
  },
  {
    sectionId: "in-transit-accelerate-operational-velocity",
    variant: "variant2" as const,
    imageSrc: "/assets/solutions/solutions-2.png",
    imageAlt: "Focus: Shippers & Distributors",
    eyebrowText: "Focus: Shippers & Distributors",
    heading: "In Transit: Accelerate Operational Velocity",
    subheading: "The Objective: Frictionless Data Orchestration.",
    listItems: [
      {
        title: "Intake Intelligence",
        description: "Slash overhead by automating the ingestion and reconciliation of inbound supplier records—PDFs, emails, and spreadsheets.",
      },
      {
        title: "Logistics Interoperability",
        description: "Seamlessly bridge harvest data with TMS and ERP systems to reduce dock latency and detention time.",
      },
      {
        title: "Inventory Precision",
        description: "Use real-time data to implement FEFO (First-Expired, First-Out) logic, reducing shrink before value evaporates.",
      },
    ],
    bottomBoxHeading: "The Business Case:",
    bottomBoxDescription: "The \"Middle Mile\" is plagued by data silos and the \"Manual Document Tax.\" We automate the digital handshake between fragmented records and enterprise logistics, focusing squarely on throughput and clerical efficiency.",
  },
  {
    sectionId: "at-the-shelf-brand-immunization-trust",
    variant: "variant1" as const,
    imageSrc: "/assets/solutions/solutions-3.png",
    imageAlt: "Focus: Processors, Retailers & CPGs",
    eyebrowText: "Focus: Processors, Retailers & CPGs",
    heading: "At the Shelf: Brand Immunization & Trust",
    subheading: "The Objective: Frictionless Data Orchestration.",
    listItems: [
      {
        title: "Surgical Recall",
        description: "Reduce the scope and cost of recalls by up to 95% through lot-level, multi-tier visibility.",
      },
      {
        title: "Freshness Guarantee",
        description: "Use provenance and transit data to optimize shelf-life, reducing markdowns and improving customer experience.",
      },
      {
        title: "Defensible Governance",
        description: "Automate the collection of primary data for audit-ready FSMA 204, Scope 3, and EUDR reporting.",
      },
    ],
    bottomBoxHeading: "The Business Case:",
    bottomBoxDescription: "As the final gatekeepers, your brand carries the ultimate liability. We provide the visibility required to isolate risks with surgical precision and ensure shelf-freshness meets your brand standards every time.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <SeoHead
        title="Solutions | Tracerty"
        description="Tracerty solutions connect field capture, compliance workflows, and intelligence layers across the global food supply chain."
        canonicalPath="/solutions"
      />
      <section
        className="relative left-1/2 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: "url('/assets/solutions/banner.jpg')" }}
      >
        <div className="py-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(5px)" }}>
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4">
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full bg-transparent px-4 py-2"
              style={{ boxShadow: PILL_SHADOW }}
            >
              <Image src="/assets/icons/pointer.svg" alt="" width={20} height={20} aria-hidden />
              <span className="text-sm font-bold text-white">Solutions</span>
            </div>

            <h1 className="text-[40px] font-normal leading-tight text-white">
              {`Turning Regulatory Mandates into `}
            </h1>
            <h2 className="mb-6 text-[40px] font-bold leading-tight text-white">
              Strategic Advantages
            </h2>

            <p className="max-w-3xl text-base font-normal text-white">
              {`Building the digital fabric that connects the global food supply chain - transforming mandatory traceability into a catalyst for operational efficiency, safety, and zero waste.`}
            </p>
          </div>
        </div>
      </section>

      {solutionsSectionsData.map((section, index) => (
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
