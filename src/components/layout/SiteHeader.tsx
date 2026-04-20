import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChevronDown, Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

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
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  return (
    <header className="relative z-50 bg-white py-5 shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-[5vw] min-[1241px]:px-0">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/assets/header/Logo.png"
            alt="Tracerty logo"
            width={225}
            height={47}
            priority
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-3 min-[1241px]:flex">
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
                    "absolute top-full z-50 min-w-[min(100vw-2rem,22rem)] pt-2 transition-opacity duration-150",
                    item.label === "About us" ? "right-0 left-auto" : "left-0",
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

        <div className="hidden min-[1241px]:block">
          <PrimaryButton type="button" onClick={() => router.push("/contact-us")}>
            Contact Us
          </PrimaryButton>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 min-[1241px]:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="absolute left-0 right-0 top-full z-40 h-[calc(100vh-100%)] bg-slate-900/35 min-[1241px]:hidden"
            onClick={() => {
              setMobileMenuOpen(false);
              setExpandedMobileMenu(null);
            }}
            aria-hidden
          />
          <div className="absolute left-0 right-0 top-full z-50 border-t border-slate-100 bg-white shadow-lg min-[1241px]:hidden">
            <nav
              aria-label="Mobile navigation"
              className="mx-auto w-full max-w-7xl px-[5vw] py-2 min-[1241px]:px-0"
            >
            {NAV_LINKS.map((item) =>
              item.type === "action" ? (
                <button
                  key={item.label}
                  type="button"
                  className="w-full px-3 py-3 text-left text-sm"
                  style={{ color: THEME.colors.textSecondary }}
                  onClick={() => {
                    onOpenPartnerModal();
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ) : item.submenu && item.submenu.length > 0 ? (
                <div key={item.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm"
                    style={{
                      color:
                        expandedMobileMenu === item.href
                          || router.pathname === item.href
                          ? THEME.colors.secondaryBlue
                          : THEME.colors.textSecondary,
                      fontWeight: router.pathname === item.href ? 700 : 400,
                    }}
                    onClick={() =>
                      setExpandedMobileMenu((prev) => (prev === item.href ? null : item.href))
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform", expandedMobileMenu === item.href && "rotate-180")}
                    />
                  </button>
                  {expandedMobileMenu === item.href && (
                    <div className="pl-3">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={handleSubmenuClick(sub.href)}
                          className="block px-3 py-2 text-xs font-normal text-[#0E1117] hover:text-[#0047AB]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-sm"
                  style={{
                    color: router.pathname === item.href ? THEME.colors.secondaryBlue : THEME.colors.textSecondary,
                    fontWeight: router.pathname === item.href ? 700 : 400,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}

            <PrimaryButton
              type="button"
              className="mt-3 w-full"
              onClick={() => {
                void router.push("/contact-us");
                setMobileMenuOpen(false);
                setExpandedMobileMenu(null);
              }}
            >
              Contact Us
            </PrimaryButton>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
