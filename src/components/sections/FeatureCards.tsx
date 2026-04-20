import { THEME } from "@/data/theme";

type FeatureCard = {
  title: string;
  description: string;
};

type FeatureCardsProps = {
  items: FeatureCard[];
};

export default function FeatureCards({ items }: FeatureCardsProps) {
  return (
    <section className="py-12">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
            style={{ borderColor: THEME.colors.textMutedLight }}
          >
            <h2 className="text-xl font-semibold" style={{ color: THEME.colors.textPrimary }}>
              {item.title}
            </h2>
            <p className="mt-2 text-sm" style={{ color: THEME.colors.textSecondary }}>
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
