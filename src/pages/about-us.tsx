import SeoHead from "@/components/layout/SeoHead";
import InfoBoxesRow from "@/components/common/InfoBoxesRow";
import OutlineButton from "@/components/common/OutlineButton";
import PeopleInfoCards from "@/components/common/PeopleInfoCards";
import PrimaryButton from "@/components/common/PrimaryButton";
import { THEME } from "@/data/theme";
import Image from "next/image";

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
    description: "Ex-Google (Head of Solution Architecture). Specializes in scaling enterprise-grade architectures and bridging the gap between fragmented field data and global retail requirements.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    imageSrc: "/assets/aboutUs/person-2.png",
    imageAlt: "Ousmane Dia",
    name: "Ousmane Dia",
    designation: "CTO & Co-Founder",
    description: "Meta AI Researcher & Amazon Alumnus. Expert in autonomous agents and NLP. Ousmane leads the engineering of our \"Zero-Typing\" interface and the predictive reasoning engine.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    imageSrc: "/assets/aboutUs/person-3.png",
    imageAlt: "Padmaja Krishnan",
    name: "Padmaja Krishnan",
    designation: "Founding Team",
    description: "Focuses on the architectural integrity of our platform, ensuring technical scalability across diverse supply chain nodes.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    imageSrc: "/assets/aboutUs/person-4.png",
    imageAlt: "Baha",
    name: "Baha",
    designation: "Founding Team",
    description: "Drives operational pioneering and the digitization of \"First Mile\" field logic into high-fidelity digital assets.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    imageSrc: "/assets/aboutUs/person-5.png",
    imageAlt: "Jennie",
    name: "Jennie",
    designation: "Founding Team",
    description: "Leads the translation of complex regulatory requirements into intuitive, field-ready user experiences.",
    twitterUrl: "https://x.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
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
              className="mb-16 inline-flex items-center gap-2 rounded-full bg-transparent px-4 py-2"
              style={{ boxShadow: PILL_SHADOW }}
            >
              <Image src="/assets/icons/pointer.svg" alt="" width={20} height={20} aria-hidden />
              <span className="text-sm font-bold text-white">Knowledge Hub</span>
            </div>

            <h1 className="text-[40px] font-normal leading-tight text-white">{`Enterprise Architects for the`}</h1>
            <h2 className="mb-8 text-[40px] font-bold leading-tight text-white">Global Food Supply Chain</h2>
            <p className="max-w-3xl text-base font-normal text-white">
              {`Led by alumni from Google, Meta, and Amazon, Tracerty is building the intelligence layer required to eliminate systemic waste and secure the future of food.`}
            </p>
          </div>
        </div>
      </section>

      <section id="an-intelligent-operating-layer" className="scroll-mt-28 py-16">
        <div className="grid items-start gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image src={aboutIntroInfo.imageSrc} alt={aboutIntroInfo.imageAlt} fill className="object-cover" />
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="mb-8 text-4xl font-bold" style={{ color: "#0E1117" }}>
              {aboutIntroInfo.heading}
            </h2>

            {aboutIntroInfo.listItems.map((item) => (
              <div key={item.title} className="mb-6 flex items-start">
                <div className="mr-6 mt-1 h-full min-h-20 w-1.5 shrink-0 rounded-full bg-blue-950" />
                <div>
                  <h3 className="mb-4 text-base font-bold" style={{ color: "#101828" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal" style={{ color: "#555555" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founding-team" className="mb-16 scroll-mt-28 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
          <h2 className="text-4xl font-bold" style={{ color: "#0E1117" }}>
            Founding Team
          </h2>
          <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
        </div>
        <p className="mx-auto mb-10 max-w-4xl text-base font-normal" style={{ color: "#0B1F33" }}>
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
            <h2 className="text-4xl font-bold" style={{ color: "#0E1117" }}>
              Our Values
            </h2>
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
          </div>
          <h3 className="text-2xl font-bold" style={{ color: "#101828" }}>
            The Tracerty Code
          </h3>
          <p className="mb-8 mt-4 text-base font-normal" style={{ color: "#0B1F33" }}>
            The principles that guide our technology and partnerships
          </p>

          <InfoBoxesRow items={aboutValues} columns={4} />
        </div>
      </section>

      <section id="our-journey" className="mb-16 scroll-mt-28">
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
          <Image src="/assets/aboutUs/journey.png" alt="Our journey" fill className="object-cover" />
        </div>
      </section>

      <section id="join-the-mission" className="mb-16 scroll-mt-28 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
          <h2 className="text-4xl font-bold" style={{ color: "#0E1117" }}>
            Join the Mission
          </h2>
          <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
        </div>

        <h3 className="text-4xl font-bold" style={{ color: "#0B1F33" }}>
          The Objective: Talent & Partnership.
        </h3>
        <p className="mx-auto mb-8 mt-4 max-w-4xl text-base font-normal" style={{ color: "#0B1F33" }}>
          {`We are seeking visionary engineers and forward-thinking design partners to build the digital fabric of a sustainable future.`}
        </p>

        <div className="flex justify-center gap-4">
          <PrimaryButton type="button">View Openings</PrimaryButton>
          <OutlineButton type="button">Become a Design Partner</OutlineButton>
        </div>
      </section>
    </>
  );
}
