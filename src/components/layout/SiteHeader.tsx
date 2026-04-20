import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import PrimaryButton from "@/components/common/PrimaryButton";
import { NAV_LINKS } from "@/data/site";
import { THEME } from "@/data/theme";
import { cn } from "@/utils/cn";

type SiteHeaderProps = {
  onOpenPartnerModal: () => void;
};

function scrollToHashFromHref(href: string) {
  const hash = href.split("#")[1];
  if (!hash) return;
  const id = decodeURIComponent(hash);
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SiteHeader({ onOpenPartnerModal }: SiteHeaderProps) {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const baseMenuClasses =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-base transition-colors duration-200";
  const stableLabelClasses =
    "grid before:invisible before:font-bold before:content-[attr(data-label)] before:row-start-1 before:col-start-1";

  const submenuLinkClasses =
    "block w-full whitespace-nowrap px-4 py-2.5 text-left text-xs font-normal text-[#0E1117] transition-colors duration-150 hover:font-bold hover:text-[#0047AB]";

  const handleSubmenuClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const pathOnly = href.split("#")[0];
    const hash = href.split("#")[1];
    if (!hash) return;
    const currentPath = router.asPath.split("#")[0];
    if (currentPath === pathOnly) {
      e.preventDefault();
      scrollToHashFromHref(href);
    }
  };

  return (
    <header className="bg-white py-5 shadow-md">
      <div className="mx-4 flex max-w-7xl items-center justify-between md:mx-10 lg:mx-auto">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/assets/header/Logo.png"
            alt="Tracerty logo"
            width={225}
            height={47}
            priority
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-3 md:flex">
          {NAV_LINKS.map((item) =>
            item.type === "action" ? (
              <button
                key={item.label}
                type="button"
                onClick={onOpenPartnerModal}
                className={cn(baseMenuClasses)}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color:
                    hoveredItem === item.label ? THEME.colors.secondaryBlue : THEME.colors.textSecondary,
                  fontWeight: hoveredItem === item.label ? 700 : 400,
                }}
              >
                <span data-label={item.label} className={stableLabelClasses}>
                  <span className="row-start-1 col-start-1">{item.label}</span>
                </span>
              </button>
            ) : item.submenu && item.submenu.length > 0 ? (
              <div
                key={item.href}
                className="relative inline-flex shrink-0 flex-col items-stretch"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={cn(baseMenuClasses)}
                  style={
                    router.pathname === item.href
                      ? {
                          color: THEME.colors.secondaryBlue,
                          backgroundColor: THEME.colors.backgroundTone,
                          fontWeight: 700,
                        }
                      : hoveredItem === item.href
                        ? {
                            color: THEME.colors.secondaryBlue,
                            fontWeight: 700,
                          }
                        : {
                            color: THEME.colors.textSecondary,
                            fontWeight: 400,
                          }
                  }
                >
                  <span data-label={item.label} className={stableLabelClasses}>
                    <span className="row-start-1 col-start-1">{item.label}</span>
                  </span>
                </Link>

                <div
                  className={cn(
                    "absolute left-0 top-full z-50 min-w-[min(100vw-2rem,22rem)] pt-2 transition-opacity duration-150",
                    hoveredItem === item.href ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
                  )}
                >
                  <div className="overflow-hidden rounded-lg border border-slate-100 bg-white py-2 shadow-lg">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={handleSubmenuClick(sub.href)}
                        className={submenuLinkClasses}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(baseMenuClasses)}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                style={
                  router.pathname === item.href
                    ? {
                        color: THEME.colors.secondaryBlue,
                        backgroundColor: THEME.colors.backgroundTone,
                        fontWeight: 700,
                      }
                    : hoveredItem === item.href
                      ? {
                          color: THEME.colors.secondaryBlue,
                          fontWeight: 700,
                        }
                      : {
                          color: THEME.colors.textSecondary,
                          fontWeight: 400,
                        }
                }
              >
                <span data-label={item.label} className={stableLabelClasses}>
                  <span className="row-start-1 col-start-1">{item.label}</span>
                </span>
              </Link>
            ),
          )}
        </nav>
        <PrimaryButton type="button" onClick={() => router.push("/contact-us")}>
          Contact Us
        </PrimaryButton>
      </div>
    </header>
  );
}
