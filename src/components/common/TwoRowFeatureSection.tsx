import Image from "next/image";

import { THEME } from "@/data/theme";
import { cn } from "@/utils/cn";

type FeatureListItem = {
  title: string;
  description: string;
};

type TwoRowFeatureSectionProps = {
  variant?: "variant1" | "variant2";
  sectionId?: string;
  imageSrc: string;
  imageAlt: string;
  eyebrowText?: string;
  heading: string;
  subheading: string;
  listItems: FeatureListItem[];
  bottomBoxHeading?: string;
  bottomBoxDescription?: string;
  className?: string;
};

export default function TwoRowFeatureSection({
  variant = "variant1",
  sectionId,
  imageSrc,
  imageAlt,
  eyebrowText,
  heading,
  subheading,
  listItems,
  bottomBoxHeading,
  bottomBoxDescription,
  className,
}: TwoRowFeatureSectionProps) {
  const isVariantTwo = variant === "variant2";

  return (
    <section id={sectionId} className={cn("scroll-mt-28 py-12", className)}>
      <div className="grid items-center gap-10 md:grid-cols-5">
        <div className={`${isVariantTwo ? "md:order-2" : "md:order-1"} md:col-span-2`}>
          <div className="relative min-h-96 w-full overflow-hidden rounded-lg">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>

        <div className={`${isVariantTwo ? "md:order-1" : "md:order-2"} md:col-span-3`}>
          {eyebrowText && (
            <div className="mb-2 flex items-center gap-2">
              <Image src="/assets/icons/pointer.svg" alt="" width={32} height={32} aria-hidden />
              <p className="text-2xl font-bold font-oxygen" style={{ color: THEME.colors.backgroundDarkTone3 }}>
                {eyebrowText}
              </p>
            </div>
          )}

          <h2 className="mb-4 text-4xl font-bold leading-tight font-oxygen" style={{ color: THEME.colors.backgroundDarkTone3 }}>
            {heading}
          </h2>

          <h3 className="mb-3 text-lg font-semibold font-inter" style={{ color: THEME.colors.textPrimary }}>
            {subheading}
          </h3>

          <div>
            {listItems.map((item) => (
              <div key={item.title} className="mb-2 flex items-center">
                <div className="mr-6 mt-1 h-full min-h-14 w-1.5 shrink-0" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
                <div>
                  <h4 className="mb-1 text-base font-bold text-slate-900 font-oxygen">{item.title}</h4>
                  <p className="text-sm font-normal font-inter" style={{ color: THEME.colors.textSecondary }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {bottomBoxHeading && bottomBoxDescription && (
        <div className="mt-6 rounded-lg p-5" style={{ backgroundColor: "#F2F2F2" }}>
          <h4 className="text-lg font-bold font-oxygen" style={{ color: THEME.colors.backgroundDarkTone }}>
            {bottomBoxHeading}
          </h4>
          <p className="mt-2 text-base font-normal font-inter" style={{ color: THEME.colors.backgroundDarkTone }}>
            {bottomBoxDescription}
          </p>
        </div>
      )}
    </section>
  );
}
