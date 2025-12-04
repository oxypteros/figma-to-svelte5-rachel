// src/lib/data/programs.ts

export type Program = {
  id: string; // href anchor for the demo version
  variant: "default" | "primary"; // 2 variants
  badge?: string; // Optional badge
  title: string;
  price: number;
  description: string;
  features: string[];
  ariaLabel: string;
};

export const programs: Program[] = [
  {
    id: "transformation",
    variant: "default",
    badge: "",
    title: "12-Week Transformation",
    price: 249,
    description:
      "Step-by-step coaching to rebuild strength, improve energy, and see real, lasting results.",
    features: [
      "Personalized workouts",
      "Weekly Progress tracking",
      "Nutrition fundamentals",
      "Chat & email support"
    ],
    ariaLabel: "Join the 12-week transformation program (Demo link)"
  },
  {
    id: "postnatal",
    variant: "primary",
    badge: "Most Popular",
    title: "Postnatal Reboot",
    price: 329,
    description:
      "Gentle, structured recovery for new mothers to help them get confidence and balance again.",
    features: [
      "Tailored postpartum training plan",
      "Nutrition & recovery coaching",
      "Weekly 1-on-1 check-ins",
      "Ongoing support between sessions"
    ],
    ariaLabel: "Join the postnatal reboot program (Demo link)"
  },
  {
    id: "hormone",
    variant: "default",
    badge: "",
    title: "Tone with Hormone Balance",
    price: 449,
    description: "Workouts + nutrition designed around your cycle, energy, and hormonal needs.",
    features: [
      "Custom periodized training cycles",
      "Ready made cooked meals",
      "Bi-weekly performance reviews",
      "Priority messaging access"
    ],
    ariaLabel: "Join the tone with hormone balance program (Demo link)"
  }
];
