import Image from "next/image";

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
};

export default function InfoBoxesRow({
  items,
  variant = "default",
  columns = 3,
  className,
}: InfoBoxesRowProps) {
  const isRegulatoryVariant = variant === "regulatory";
  const columnsClass = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <div className={`grid gap-4 ${columnsClass} ${className ?? ""}`}>
      {items.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className="rounded-2xl p-8 text-center"
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
          <h4 className="mb-3 text-xl font-bold break-words" style={{ color: "#101828" }}>
            {item.title}
          </h4>
          <p className="text-base font-normal break-words" style={{ color: "#101828" }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
