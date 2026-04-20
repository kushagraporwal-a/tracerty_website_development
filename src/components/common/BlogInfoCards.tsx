import Image from "next/image";
import { ArrowRight } from "lucide-react";

type BlogInfoItem = {
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  readMoreLabel?: string;
};

type BlogInfoCardsProps = {
  items: BlogInfoItem[];
  className?: string;
};

export default function BlogInfoCards({ items, className }: BlogInfoCardsProps) {
  return (
    <div className={`grid gap-4 md:grid-cols-3 ${className ?? ""}`}>
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="overflow-hidden rounded-2xl bg-white">
          <div className="relative">
            <div className="relative h-48 w-full">
              <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" />
            </div>
            <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-sm text-white" style={{ backgroundColor: "#1A5FCC" }}>
              {item.tag}
            </span>
          </div>

          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold break-words" style={{ color: "#101828" }}>
              {item.title}
            </h3>
            <button type="button" className="inline-flex items-center gap-2 text-base font-normal" style={{ color: "#1A5FCC" }}>
              <span>{item.readMoreLabel ?? "Read more"}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
