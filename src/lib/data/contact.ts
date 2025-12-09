// src/lib/data/contact.ts

export interface ContactDetails {
  phoneDisplay: string;
  phoneNumber: string;
  whatsapp: string;
  email: string;
  hours: string;
}

export const contactConfig: { contact: ContactDetails } = {
  contact: {
    phoneDisplay: "+1 (332) 000-0000",
    phoneNumber: "+13320000000",
    whatsapp: "13320000000",
    email: "hello@oxypteros.com",
    hours: "Mon-Fri, 8:00-17:00 (CET)"
  }
};
