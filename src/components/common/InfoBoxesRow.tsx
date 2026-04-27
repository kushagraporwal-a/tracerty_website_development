import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/utils/cn";

type InfoBoxItem = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  iconWidth?: number;
  iconHeight?: number;
};

type InfoBoxesRowProps = {
  items: InfoBoxItem[];
  variant?: "default" | "regulatory";
  columns?: 3 | 4;
  className?: string;
  desktopLayout?: "grid" | "centered";
};

export default function InfoBoxesRow({
  items,
  variant = "default",
  columns = 3,
  className,
  desktopLayout = "grid",
}: InfoBoxesRowProps) {
  const isRegulatoryVariant = variant === "regulatory";
  const columnsClass = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const gap = 16;
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
    const gap = 16;
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
        className="flex snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto px-[10%] pb-2 md:hidden [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <div
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            key={`${item.title}-${index}`}
            className={cn(
              "w-[80%] shrink-0 snap-center rounded-2xl p-8 text-center transition-transform duration-300 ease-out",
              activeSlide === index ? "scale-100" : "scale-[0.985]",
            )}
            style={{
              backgroundColor: isRegulatoryVariant ? "#FFF3E8" : "#FFFFFF",
              border: isRegulatoryVariant ? "1px solid #FF853333" : "none",
            }}
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={item.iconSrc}
                alt={item.iconAlt}
                width={item.iconWidth ?? 56}
                height={item.iconHeight ?? 56}
              />
            </div>
            <h4 className="mb-3 break-words text-xl font-bold font-oxygen" style={{ color: "#101828" }}>
              {item.title}
            </h4>
            <p className="break-words text-base font-normal font-oxygen" style={{ color: "#101828" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex justify-center gap-2 md:hidden">
          {items.map((item, index) => (
            <button
              key={`${item.title}-dot-${index}`}
              type="button"
              aria-label={`Go to card ${index + 1}`}
              onClick={() => scrollToSlide(index)}
              className="h-2 w-2 rounded-full transition-colors duration-200 font-oxygen"
              style={{ backgroundColor: activeSlide === index ? "#0047AB" : "#9CA3AF" }}
            />
          ))}
        </div>
      )}

      <div
        className={cn(
          "hidden gap-4 md:flex",
          desktopLayout === "grid" ? `md:grid ${columnsClass}` : "md:flex md:flex-wrap md:justify-center",
        )}
      >
        {items.map((item, index) => (
          <div
            key={`${item.title}-desktop-${index}`}
            className={cn(
              "rounded-2xl p-8 text-center",
              desktopLayout === "centered" ? "w-[calc((100%-2rem)/3)] min-w-[240px] max-w-[340px]" : "",
            )}
            style={{
              backgroundColor: isRegulatoryVariant ? "#FFF3E8" : "#FFFFFF",
              border: isRegulatoryVariant ? "1px solid #FF853333" : "none",
            }}
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={item.iconSrc}
                alt={item.iconAlt}
                width={item.iconWidth ?? 56}
                height={item.iconHeight ?? 56}
              />
            </div>
            <h4 className="mb-3 break-words text-xl font-bold font-oxygen" style={{ color: "#101828" }}>
              {item.title}
            </h4>
            <p className="break-words text-base font-normal font-oxygen" style={{ color: "#101828" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
