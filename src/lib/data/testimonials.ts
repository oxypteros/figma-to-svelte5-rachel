// src/lib/data/testimonials.ts

// Only the first testimonial will be rendered
export type Testimonial = {
  stars: number;
  quote: string;
  image: string;
  alt: string;
  name: string;
  program: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote:
      "After two kids, I never thought I'd feel this strong again. Rachel Stone helped me rebuild my body and confidence.",
    image: "/img/users/sara-testimonial.webp",
    alt: "Sara smiling at the camera",
    name: "Sara Chen",
    program: "Postnatal Reboot",
    date: "November 2025"
  },
  {
    stars: 5,
    quote:
      "I used to feel drained and frustrated no matter how much I tried. Rachel Stone helped me reconnect with my body.",
    image: "/img/users/sophie-testimonial.webp",
    alt: "Shophie smiling at the camera",
    name: "Sophie Lammers",
    program: "12-Week Transformation Program",
    date: "October 2025"
  }
];
