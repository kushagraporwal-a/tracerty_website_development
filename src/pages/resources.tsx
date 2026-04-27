import SeoHead from "@/components/layout/SeoHead";
import BlogInfoCards from "@/components/common/BlogInfoCards";
import InfoBoxesRow from "@/components/common/InfoBoxesRow";
import ResourcesFaqSection from "@/components/common/ResourcesFaqSection";
import { THEME } from "@/data/theme";
import Image from "next/image";
import { useRouter } from "next/router";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getLatestBlogs } from "@/lib/blogsApi";

const PILL_SHADOW = "0px 4px 6px -4px #0000001A";

const resourcesRegulatoryInfo = [
  {
    iconSrc: "/assets/resources/info-1.svg",
    iconAlt: "The 24-Hour Mandate",
    title: "The 24-Hour Mandate",
    description: "Provide an electronic, sortable spreadsheet of traceability data to the FDA within 24 hours.",
  },
  {
    iconSrc: "/assets/resources/info-2.svg",
    iconAlt: "The Data Knot",
    title: "The Data Knot",
    description: "Tracking Key Data Elements (KDEs) across every Critical Tracking Event (CTE).",
  },
  {
    iconSrc: "/assets/resources/info-3.svg",
    iconAlt: "The First-Mile Challenge",
    title: "The First-Mile Challenge",
    description: "Bridging the gap where data is still trapped on paper.",
  },
];

/*
const resourcesBlogInfo = [
  {
    imageSrc: "/assets/resources/blogInfo-1.png",
    imageAlt: "The Tactical Wedge: Why FSMA 204 is the necessary catalyst for digitizing the \"First Mile\"",
    tag: "Technology",
    title: "The Tactical Wedge: Why FSMA 204 is the necessary catalyst for digitizing the \"First Mile\"",
  },
  {
    imageSrc: "/assets/resources/blogInfo-2.png",
    imageAlt: "Beyond the Keyboard: How \"Zero-Typing\" AI resolves the field-level data entry friction.",
    tag: "Strategy",
    title: "Beyond the Keyboard: How \"Zero-Typing\" AI resolves the field-level data entry friction.",
  },
  {
    imageSrc: "/assets/resources/blogInfo-3.png",
    imageAlt: "The $1T Dividend: Moving from static records to proactive waste avoidance in the cold chain.",
    tag: "Sustainability",
    title: "The $1T Dividend: Moving from static records to proactive waste avoidance in the cold chain.",
  },
];
*/

type BlogCardData = {
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  slug?: string;
};

const resourcesOfficialInfo = [
  {
    iconSrc: "/assets/resources/info-4.svg",
    iconAlt: "FDA: Food Traceability Rule 204",
    title: "FDA: Food Traceability Rule 204",
    description: "Official resource description one.",
  },
  {
    iconSrc: "/assets/resources/info-5.svg",
    iconAlt: "FDA: Food Traceability Rule 204",
    title: "FDA: Food Traceability Rule 204",
    description: "Official resource description two.",
  },
  {
    iconSrc: "/assets/resources/info-6.svg",
    iconAlt: "GS1 US: Foodservice Traceability",
    title: "GS1 US: Foodservice Traceability",
    description: "Official resource description three.",
  },
  {
    iconSrc: "/assets/resources/info-7.svg",
    iconAlt: "USDA: Agricultural Marketing Service",
    title: "USDA: Agricultural Marketing Service",
    description: "Official resource description four.",
  },
  {
    iconSrc: "/assets/resources/info-8.svg",
    iconAlt: "The Partnership for Food Safety Education",
    title: "The Partnership for Food Safety Education",
    description: "Official resource description five.",
  },
];

export default function ResourcesPage({
  resourcesBlogInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <SeoHead
        title="Resources | Tracerty"
        description="Explore Tracerty resources that help teams turn first-mile traceability and compliance data into practical operating intelligence."
        canonicalPath="/resources"
      />
      <section
        className="relative left-1/2 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: "url('/assets/resources/banner.jpg')" }}
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

            <h1 className="text-[40px] font-normal leading-tight text-white font-oxygen">
              {`FSMA 204 Compliance as a`}
            </h1>
            <h2 className="mb-6 text-[40px] font-bold leading-tight text-white font-oxygen">
              Catalyst for Supply Chain Intelligence
            </h2>

            <p className="max-w-3xl text-base font-normal text-white font-inter">
              {`Expert insights and regulatory roadmaps designed to help early partners bridge the "First Mile" data gap and turn compliance into a strategic asset.`}
            </p>
          </div>
        </div>
      </section>

      <section id="fsma-204-regulatory-turning-point" className="mb-16 mt-20 scroll-mt-28">
        <h2 className="mb-4 text-4xl font-bold font-oxygen" style={{ color: "#0E1117" }}>
          FSMA 204: The Regulatory Turning Point
        </h2>
        <p className="text-base font-normal font-inter" style={{ color: "#0B1F33" }}>
          {`The FDA's FSMA Rule 204 is a federal requirement for market entry. By July 2028, every entity handling items on the Food Traceability List must maintain a digital "Golden Record."`}
        </p>

        <InfoBoxesRow className="mt-6" items={resourcesRegulatoryInfo} variant="regulatory" />
      </section>

      <section
        id="latest-from-our-blog"
        className="relative left-1/2 mb-16 w-screen -translate-x-1/2 scroll-mt-28 px-10"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <div className="mx-auto w-full max-w-7xl" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
            <h2 className="text-4xl font-bold font-oxygen" style={{ color: "#0E1117" }}>
              Latest from Our Blog
            </h2>
            <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
          </div>

          <BlogInfoCards items={resourcesBlogInfo} />
        </div>
      </section>

      <ResourcesFaqSection sectionId="frequently-asked-questions" />

      <section
        id="official-regulatory-industry-resources"
        className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-28"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <div
          className="mx-auto w-full max-w-7xl text-center"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <h2 className="mb-4 text-4xl font-bold font-oxygen" style={{ color: "#0E1117" }}>
            {`Official Regulatory & Industry Resources`}
          </h2>
          <p className="mb-8 text-base font-normal font-inter" style={{ color: "#0B1F33" }}>
            Essential external resources for compliance and best practices
          </p>

          <InfoBoxesRow items={resourcesOfficialInfo} desktopLayout="centered" />

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:opacity-90 font-oxygen"
              onClick={() => void router.push("/contact-us")}
            >
              Access Our Internal Compliance Guide
            </button>
          </div>
        </div>
      </section>

    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  resourcesBlogInfo: BlogCardData[];
}> = async () => {
  try {
    const latestBlogs = await getLatestBlogs();
    console.log("latestBlogs", latestBlogs[0].fields.descriptionStart);
    const resourcesBlogInfo: BlogCardData[] = latestBlogs.map((blog: any, index: number) => {
      const imageUrl = blog?.fields?.bannerImage?.fields?.file?.url;
      const normalizedImageUrl = imageUrl
        ? imageUrl.startsWith("//")
          ? `https:${imageUrl}`
          : imageUrl
        : `/assets/resources/blogInfo-${(index % 3) + 1}.png`;

      return {
        imageSrc: normalizedImageUrl,
        imageAlt: blog?.fields?.title ?? "Resource blog",
        tag: blog?.fields?.tag ?? "Insights",
        title: blog?.fields?.title ?? "Untitled blog",
        slug: blog?.fields?.slug ?? blog?.sys?.id ?? "",
      };
    });

    return {
      props: {
        resourcesBlogInfo,
      },
    };
  } catch {
    return {
      props: {
        resourcesBlogInfo: [],
      },
    };
  }
};
