// src/lib/data/socials.ts

export type IconName = "Github" | "Instagram" | "X" | "YouTube" | "Email";

export interface SocialItem {
  id: string;
  href: string;
  icon: IconName;
  label: string;
  inTab?: boolean;
}

export const socialItems: SocialItem[] = [
  {
    id: "Github",
    href: "https://github.com/oxypteros/figma-to-svelte5-rachel",
    icon: "Github",
    label: "Github repository (opens in a new tab)"
  },
  {
    id: "Instagram",
    href: "https://instagram.com",
    icon: "Instagram",
    label: "Instagram homepage (opens in a new tab)"
  },
  {
    id: "X",
    href: "https://x.com",
    icon: "X",
    label: "X homepage (opens in a new tab)"
  },
  {
    id: "YouTube",
    href: "https://youtube.com",
    icon: "YouTube",
    label: "YouTube homepage (opens in a new tab)"
  },
  {
    id: "Contact",
    href: "#contact-anchor",
    icon: "Email",
    label: "Contact Oxypteros",
    inTab: false
  }
];
