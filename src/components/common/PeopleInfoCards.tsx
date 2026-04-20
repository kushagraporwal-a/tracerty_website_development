import Image from "next/image";

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
  return (
    <div className={`grid gap-6 md:grid-cols-2 xl:grid-cols-5 ${className ?? ""}`}>
      {items.map((person, index) => (
        <article key={`${person.name}-${index}`}>
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
              <Image src="/assets/aboutUs/linkedin.svg" alt="LinkedIn" width={18} height={18} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
