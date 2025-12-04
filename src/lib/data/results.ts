// src/lib/data/results.ts

// Only the first result testimonial will be rendered

export type Results = {
  stars: number;
  quote: string;
  image: string;
  alt: string;
  name: string;
  program: string;
};

export const results: Results[] = [
  {
    stars: 5,
    quote:
      "I used to feel drained and frustrated no matter how much I tried. Rachel helped me reconnect with my body and rebuild strength without burnout. For the first time, I actually enjoy moving again—and the changes haven't hust been physical, they've been mental too.",
    image: "/img/users/sophie-testimonial.webp",
    alt: "Shophie smiling at the camera",
    name: "Sophie Lammers",
    program: "12-Week Transformation Program"
  },
  {
    stars: 5,
    quote:
      "After two kids, I never thought I'd feel this strong again. Rachel Stone helped me rebuild my body and confidence.",
    image: "/img/users/sara-testimonial.webp",
    alt: "Sara smiling at the camera",
    name: "Sara Chen",
    program: "Postnatal Reboot"
  }
];
