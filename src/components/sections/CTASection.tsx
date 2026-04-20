import { THEME } from "@/data/theme";

type CTASectionProps = {
  title: string;
  description: string;
};

export default function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="py-12">
      <div
        className="rounded-2xl p-8 text-white"
        style={{ backgroundColor: THEME.colors.backgroundDarkTone }}
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm" style={{ color: THEME.colors.textMutedLight }}>
          {description}
        </p>
      </div>
    </section>
  );
}
