// src/lib/data/faq.ts

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  {
    question: "What should I expect during my first session?",
    answer:
      "Your first session focuses on assessment and clarity. We'll review your goals, training history, mobility, and overall fitness level. Then you'll go through a light introductory workout so I can understand how your body moves and tailor your program accordingly."
  },
  {
    question: "Do I need a gym membership?",
    answer:
      "No. You can train anywhere, at home, outdoors, or in your local gym if you prefer. Your program adapts to the equipment you have available."
  },
  {
    question: "How often should I train each week?",
    answer:
      "Most clients see great results with 3-4 sessions per week, but the plan is fully customized. Your schedule, recovery, and goals determine the ideal frequency."
  },
  {
    question: "Is nutrition coaching included?",
    answer:
      "Yes. You'll receive guidance on meal structure, portioning, and habits that support your training. Full meal plans are optional depending on your package."
  },
  {
    question: "Can I cancel or pause my plan anytime?",
    answer:
      "Absolutely. You're free to pause or cancel your plan whenever needed. No long-term contracts or hidden commitments."
  },
  {
    question: "How long will it take to see results?",
    answer:
      "Most clients notice improvements in strength, energy, and mood within the first 2-3 weeks. Visible physical changes typically appear after 6-8 weeks of consistent training and nutrition."
  }
];
