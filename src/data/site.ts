export const SITE_URL = "https://www.example.com";

export type NavSubmenuItem = {
  label: string;
  href: string;
};

export type NavEntry =
  | { type: "link"; href: string; label: string; submenu?: NavSubmenuItem[] }
  | { type: "action"; label: string };

export const NAV_LINKS: NavEntry[] = [
  { type: "link", href: "/", label: "Home" },
  {
    type: "link",
    href: "/products",
    label: "Products",
    submenu: [
      {
        label: "At the Source: Farm Intelligence",
        href: "/products#at-the-source-farm-intelligence",
      },
      {
        label: "In Transit: Movement & Intake Intelligence",
        href: "/products#in-transit-movement-intake-intelligence",
      },
      {
        label: "At the Shelf: Visibility & Governance",
        href: "/products#at-the-shelf-visibility-governance",
      },
    ],
  },
  {
    type: "link",
    href: "/solutions",
    label: "Solutions",
    submenu: [
      {
        label: "At the Source: Secure Preferred Supplier Status",
        href: "/solutions#at-the-source-secure-preferred-supplier-status",
      },
      {
        label: "In Transit: Accelerate Operational Velocity",
        href: "/solutions#in-transit-accelerate-operational-velocity",
      },
      {
        label: "At the Shelf: Brand Immunization & Trust",
        href: "/solutions#at-the-shelf-brand-immunization-trust",
      },
    ],
  },
  {
    type: "link",
    href: "/sustainability",
    label: "Sustainability",
    submenu: [
      {
        label: "The Objective: Verifiable Provenance",
        href: "/sustainability#objective-verifiable-provenance",
      },
      {
        label: "The Objective: Frictionless Data Orchestration",
        href: "/sustainability#objective-frictionless-data-orchestration",
      },
      {
        label: "Real Data vs. Statistical Guesses",
        href: "/sustainability#real-data-vs-statistical-guesses",
      },
      {
        label: "Our Collective Impact",
        href: "/sustainability#our-collective-impact",
      },
    ],
  },
  {
    type: "link",
    href: "/resources",
    label: "Resources",
    submenu: [
      {
        label: "FSMA 204: The Regulatory Turning Point",
        href: "/resources#fsma-204-regulatory-turning-point",
      },
      {
        label: "Latest from Our Blog",
        href: "/resources#latest-from-our-blog",
      },
      {
        label: "Frequently Asked Questions",
        href: "/resources#frequently-asked-questions",
      },
      {
        label: "Official Regulatory & Industry Resources",
        href: "/resources#official-regulatory-industry-resources",
      },
    ],
  },
  { type: "action", label: "Become a Partner" },
  {
    type: "link",
    href: "/about-us",
    label: "About us",
    submenu: [
      {
        label: "An Intelligent Operating Layer",
        href: "/about-us#an-intelligent-operating-layer",
      },
      {
        label: "Founding Team",
        href: "/about-us#founding-team",
      },
      {
        label: "Our Values",
        href: "/about-us#our-values",
      },
      {
        label: "Our Journey",
        href: "/about-us#our-journey",
      },
      {
        label: "Join the Mission",
        href: "/about-us#join-the-mission",
      },
    ],
  },
];
