import { THEME } from "@/data/theme";

type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-white py-16">
      <h1
        className="text-4xl font-bold tracking-tight md:text-5xl"
        style={{ color: THEME.colors.textPrimary }}
      >
        {title}
      </h1>
      <p
        className="mt-4 text-base md:text-lg"
        style={{ color: THEME.colors.textSecondary }}
      >
        {description}
      </p>
    </section>
  );
}
