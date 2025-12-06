// src/lib/data/header-menu.ts

export interface HeaderMenuItems {
  id: string;
  href: string;
  label?: string;
}

export const headerMenuItems: HeaderMenuItems[] = [
  { id: "Home", href: "/" },
  { id: "About", href: "#introduction-anchor" },
  { id: "Services", href: "#services-anchor" },
  { id: "Programs", href: "#programs-anchor" },
  { id: "Results", href: "#results-anchor" },
  { id: "Contact", href: "#contact-anchor" }
];
