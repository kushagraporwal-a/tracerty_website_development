import SeoHead from "@/components/layout/SeoHead";
import InfoBoxesRow from "@/components/common/InfoBoxesRow";
import OutlineButton from "@/components/common/OutlineButton";
import PeopleInfoCards from "@/components/common/PeopleInfoCards";
import PrimaryButton from "@/components/common/PrimaryButton";
import { openPartnerModal } from "@/utils/partnerModal";
import { THEME } from "@/data/theme";
import Image from "next/image";
import TwoRowFeatureSection from "@/components/common/TwoRowFeatureSection";
import { useRouter } from "next/router";

const PILL_SHADOW = "0px 4px 6px -4px #0000001A";

const aboutIntroInfo = {
  imageSrc: "/assets/aboutUs/aboutUs-1.png",
  imageAlt: "An Intelligent Operating Layer",
  heading: "An Intelligent Operating Layer",
  subheading: "We are dedicated to solving the $1T global food waste crisis by transforming the \"First Mile\" into a high-fidelity \"Golden Record.\"",
  listItems: [
    {
      title: "Eliminating Waste",
      description: "Recapturing systemic value through predictive intelligence.",
    },
    {
      title: "Digital Inclusion",
      description: "Providing elite tools designed for real-world field conditions.",
    },
    {
      title: "Defensible Truth",
      description: "Establishing an unbreakable record of safety and sustainability.",
    },
  ],
};

const foundingTeam = [
  {
    imageSrc: "/assets/aboutUs/person-1.png",
    imageAlt: "Umakant Sista",
    name: "Umakant Sista",
    designation: "CEO & Co-Founder",
    description: "A technology executive with 25+ years of experience, Umakant has led AI-native product ecosystems and global revenue engines at Google and Adobe. An IIM Ahmedabad alumnus, he specializes in bridging the gap between product engineering and market adoption to scale category-defining enterprise ventures.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/in/umakant-sista/",
  },
  {
    imageSrc: "/assets/aboutUs/person-2.png",
    imageAlt: "Ousmane Dia",
    name: "Ousmane Dia",
    designation: "CTO & Co-Founder",
    description: "A Fulbright Scholar and PhD, Ousmane is an AI researcher with over a decade of experience at Meta AI, Amazon, and Element AI. He specializes in reinforcement learning and large language models, focusing on transforming cutting-edge AI research into impactful, real-world applications.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/in/ousmanedia/",
  },
  {
    imageSrc: "/assets/aboutUs/person-3.png",
    imageAlt: "Padmaja Krishnan",
    name: "Padmaja Krishnan",
    designation: "Founding Team",
    description: "Padma is a product leader with over 15 years of experience scaling AI-powered commerce and personalization platforms at Google and eBay. A Cornell MBA, she combines execution rigor with deep AI fluency to solve high-impact user problems across global multi-sided marketplaces.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/in/padmajakrishnan/",
  },
  {
    imageSrc: "/assets/aboutUs/person-4.png",
    imageAlt: "Baha",
    name: "Baha",
    designation: "Founding Team",
    description: "With 30 years of expertise in food safety and ag-tech, Baha has led complex operational systems for major retail and grower organizations through FDA and CDC oversight. They specialize in connecting supply chain data flow with technology adoption to drive both regulatory compliance and enterprise profitability.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/in/baha-s-2934646b/",
  },
  // {
  //   imageSrc: "/assets/aboutUs/person-5.png",
  //   imageAlt: "Jennie",
  //   name: "Jennie",
  //   designation: "Founding Team",
  //   description: "Leads the translation of complex regulatory requirements into intuitive, field-ready user experiences.",
  //   twitterUrl: "https://x.com/",
  //   linkedinUrl: "https://www.linkedin.com/",
  // },
];

const aboutValues = [
  {
    iconSrc: "/assets/aboutUs/info-1.svg",
    iconAlt: "Frictionless First-Mile",
    title: "Frictionless First-Mile",
    description: "If it slows the harvest, it isn't the solution.",
  },
  {
    iconSrc: "/assets/aboutUs/info-2.svg",
    iconAlt: "Universal Interoperability",
    title: "Universal Interoperability",
    description: "We layer over existing investments; we do not replace them.",
  },
  {
    iconSrc: "/assets/aboutUs/info-3.svg",
    iconAlt: "Integrity-First Data",
    title: "Integrity-First Data",
    description: "Prioritizing primary truth over statistical proxies.",
  },
  {
    iconSrc: "/assets/aboutUs/info-4.svg",
    iconAlt: "Pragmatic Excellence",
    title: "Pragmatic Excellence",
    description: "Technically elite software designed for real-world grit.",
  },
];

export default function AboutUsPage() {
  const router = useRouter();

  return (
    <>
      <SeoHead
        title="About Us | Tracerty"
        description="Meet the team behind Tracerty and learn how we are building the intelligence layer for the global food supply chain."
        canonicalPath="/about-us"
      />
      <section
        className="relative left-1/2 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: "url('/assets/aboutUs/banner.jpg')" }}
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
              <span className="text-sm font-bold text-white font-oxygen">Knowledge Hub</span>
            </div>

            <h1 className="text-[40px] font-normal leading-tight text-white font-oxygen">{`Enterprise Architects for the`}</h1>
            <h2 className="mb-8 text-[40px] font-bold leading-tight text-white font-oxygen">Global Food Supply Chain</h2>
            <p className="max-w-3xl text-base font-normal text-white font-inter">
              {`Led by alumni from Google, Meta, and Amazon, Tracerty is building the intelligence layer required to eliminate systemic waste and secure the future of food.`}
            </p>
          </div>
        </div>
      </section>

      <TwoRowFeatureSection
        sectionId="an-intelligent-operating-layer"
        variant="variant1"
        imageSrc={aboutIntroInfo.imageSrc}
        imageAlt={aboutIntroInfo.imageAlt}
        heading={aboutIntroInfo.heading}
        subheading={aboutIntroInfo.subheading}
        listItems={aboutIntroInfo.listItems}
      />

      <section id="founding-team" className="mb-16 scroll-mt-28 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
          <h2 className="text-4xl font-bold font-oxygen" style={{ color: "#0E1117" }}>
            Founding Team
          </h2>
          <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
        </div>
        <p className="mx-auto mb-10 max-w-4xl text-base font-normal font-inter" style={{ color: "#0B1F33" }}>
          {`Industry veterans from Google, Meta, and Amazon building the future of food intelligence`}
        </p>

        <PeopleInfoCards items={foundingTeam} />
      </section>

      <section
        id="our-values"
        className="relative left-1/2 mb-16 w-screen -translate-x-1/2 scroll-mt-28"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <div
          className="mx-auto w-full max-w-7xl text-center"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
            <h2 className="text-4xl font-bold font-oxygen" style={{ color: "#0E1117" }}>
              Our Values
            </h2>
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
          </div>
          <h3 className="text-2xl font-bold font-oxygen" style={{ color: "#101828" }}>
            The Tracerty Code
          </h3>
          <p className="mb-8 mt-4 text-base font-normal font-inter" style={{ color: "#0B1F33" }}>
            The principles that guide our technology and partnerships
          </p>

          <InfoBoxesRow items={aboutValues} columns={4} />
        </div>
      </section>

      <section id="our-journey" className="mb-16 scroll-mt-28">
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
          <Image src="/assets/aboutUs/journey.png" alt="Our journey" fill className="object-contain" />
        </div>
      </section>

      <section
        id="join-the-mission"
        className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-28"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
            <h2 className="text-4xl font-bold font-oxygen" style={{ color: "#0E1117" }}>
              Join the Mission
            </h2>
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
          </div>

          <h3 className="text-4xl font-bold font-oxygen" style={{ color: "#0B1F33" }}>
            The Objective: Talent & Partnership.
          </h3>
          <p className="mx-auto mb-8 mt-4 max-w-4xl text-base font-normal font-inter" style={{ color: "#0B1F33" }}>
            {`We are seeking visionary engineers and forward-thinking design partners to build the digital fabric of a sustainable future.`}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton type="button" className="w-full sm:w-auto" onClick={() => void router.push("/contact-us")}>View Openings</PrimaryButton>
            <OutlineButton
              type="button"
              className="w-full sm:w-auto"
              onClick={openPartnerModal}
            >
              Become a Design Partner
            </OutlineButton>
          </div>
        </div>
      </section>
    </>
  );
}
