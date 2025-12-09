// src/lib/data/footer-menu.ts

export interface FooterMenuItems {
  id: string;
  href: string;
  label?: string;
}

export const footerMenuItems: FooterMenuItems[] = [
  { id: "Home", href: "/" },
  { id: "About", href: "#introduction-anchor" },
  { id: "Services", href: "#services-anchor" },
  { id: "Programs", href: "#programs-anchor" },
  { id: "Results", href: "#results-anchor" },
  { id: "Contact", href: "#contact-anchor" }
];
