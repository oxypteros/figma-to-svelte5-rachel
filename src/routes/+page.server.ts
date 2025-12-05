import { Resend } from "resend";
import { fail } from "@sveltejs/kit";
import { SECRET_RESEND_API_KEY, CONTACT_EMAIL, SENDER_EMAIL } from "$env/static/private";

export const actions = {
  contact: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("Full name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("Message") as string;

    if (!name || !email || !message) {
      return fail(400, { missing: true, name, email, message: "All fields are required." });
    }
    // Demo Mode
    const isDemoMode = !SECRET_RESEND_API_KEY || SECRET_RESEND_API_KEY.includes("placeholder");

    if (isDemoMode) {
      console.log("------------------------------------------------");
      console.log("⚠️ DEMO MODE: Email simulation (No valid API Key found)");
      console.log(`To: ${CONTACT_EMAIL || "Not configured"}`);
      console.log(`From: ${SENDER_EMAIL || "Not configured"}`);
      console.log(`Content: ${message}`);
      console.log("------------------------------------------------");
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return { success: true, demo: true };
    }

    // The real deal, send email though resend
    const resend = new Resend(SECRET_RESEND_API_KEY);
    try {
      await resend.emails.send({
        from: SENDER_EMAIL,
        to: CONTACT_EMAIL,
        subject: `New Message from Rachel Demo: ${name}`,
        html: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
      });

      return { success: true };
    } catch (error) {
      console.error("Resend Error:", error);
      return fail(500, { success: false, message: "Failed to send email." });
    }
  }
};
