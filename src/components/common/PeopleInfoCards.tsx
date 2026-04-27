import Image from "next/image";
import { useRef, useState } from "react";

import { cn } from "@/utils/cn";

type PersonItem = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  designation: string;
  description: string;
  twitterUrl: string;
  linkedinUrl: string;
};

type PeopleInfoCardsProps = {
  items: PersonItem[];
  className?: string;
};

export default function PeopleInfoCards({ items, className }: PeopleInfoCardsProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const gap = 24;
    const slideWidth = firstCard.offsetWidth + gap;
    if (!slideWidth) return;
    const nextIndex = Math.round(container.scrollLeft / slideWidth);
    const boundedIndex = Math.min(Math.max(nextIndex, 0), items.length - 1);
    setActiveSlide(boundedIndex);
  };

  const scrollToSlide = (index: number) => {
    const target = itemRefs.current[index];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveSlide(index);
  };

  const snapToNearestSlide = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const gap = 24;
    const slideWidth = firstCard.offsetWidth + gap;
    if (!slideWidth) return;
    const nearestIndex = Math.round(container.scrollLeft / slideWidth);
    const boundedIndex = Math.min(Math.max(nearestIndex, 0), items.length - 1);
    scrollToSlide(boundedIndex);
  };

  return (
    <div className={className ?? ""}>
      <div
        ref={carouselRef}
        onScroll={handleCarouselScroll}
        onTouchEnd={snapToNearestSlide}
        onMouseUp={snapToNearestSlide}
        className="flex snap-x snap-mandatory scroll-smooth gap-6 overflow-x-auto px-[10%] pb-2 md:hidden [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((person, index) => (
          <article
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            key={`${person.name}-${index}`}
            className={cn(
              "w-[80%] shrink-0 snap-center transition-transform duration-300 ease-out",
              activeSlide === index ? "scale-100" : "scale-[0.985]",
            )}
          >
            <div className="relative mb-4 h-[400px] w-full overflow-hidden">
              <Image src={person.imageSrc} alt={person.imageAlt} fill className="object-cover" />
            </div>

            <h3 className="text-left text-xl font-bold" style={{ color: "#101828" }}>
              {person.name}
            </h3>
            <p className="mb-3 text-left text-lg font-normal" style={{ color: "#717182" }}>
              {person.designation}
            </p>
            <p
              className="mb-3 text-left text-base font-normal"
              style={{
                color: "#667085",
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
              }}
              title={person.description}
            >
              {person.description}
            </p>

            <div className="flex items-center gap-3">
              <a href={person.twitterUrl} target="_blank" rel="noreferrer">
                <Image src="/assets/aboutUs/twitter.svg" alt="Twitter" width={18} height={18} />
              </a>
              <a href={person.linkedinUrl} target="_blank" rel="noreferrer">
                <Image src="/assets/aboutUs/linkedInIcon.svg" alt="LinkedIn" width={18} height={18} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex justify-center gap-2 md:hidden">
          {items.map((person, index) => (
            <button
              key={`${person.name}-dot-${index}`}
              type="button"
              aria-label={`Go to team card ${index + 1}`}
              onClick={() => scrollToSlide(index)}
              className="h-2 w-2 rounded-full transition-colors duration-200"
              style={{ backgroundColor: activeSlide === index ? "#0047AB" : "#9CA3AF" }}
            />
          ))}
        </div>
      )}

      <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
        {items.map((person, index) => (
          <article key={`${person.name}-desktop-${index}`}>
            <div className="relative mb-4 h-[400px] w-full overflow-hidden">
              <Image src={person.imageSrc} alt={person.imageAlt} fill className="object-cover" />
            </div>

            <h3 className="text-left text-xl font-bold" style={{ color: "#101828" }}>
              {person.name}
            </h3>
            <p className="mb-3 text-left text-lg font-normal" style={{ color: "#717182" }}>
              {person.designation}
            </p>
            <p
              className="mb-3 text-left text-base font-normal"
              style={{
                color: "#667085",
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
              }}
              title={person.description}
            >
              {person.description}
            </p>

            <div className="flex items-center gap-3">
              <a href={person.twitterUrl} target="_blank" rel="noreferrer">
                <Image src="/assets/aboutUs/twitter.svg" alt="Twitter" width={18} height={18} />
              </a>
              <a href={person.linkedinUrl} target="_blank" rel="noreferrer">
                <Image src="/assets/aboutUs/linkedInIcon.svg" alt="LinkedIn" width={18} height={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
