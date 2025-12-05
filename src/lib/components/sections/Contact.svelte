<script lang="ts">
  import ContactButton from "$lib/components/ui/button/contact-button.svelte";
  import Call from "~icons/rachel/call";
  import Chat from "~icons/rachel/chat";

  import { contactConfig } from "$lib/data/contact";

  import ContactForm from "$lib/components/ui/contact-form.svelte";
</script>

<section id="contact-anchor" class="bg-wh-100 dark:bg-bl-90 w-full py-14 lg:py-24">
  <div class="max-w-desktop-container mx-auto flex w-full flex-col gap-10 px-4">
    <div class="flex flex-col gap-6">
      <div class="lg:max-w-132">
        <h2 class="text-3 text-bl-50 dark:text-wh-90/80">Contact</h2>
        <span class="text-h6 lg:text-h3 mt-0.5">Let's build your plan together</span>
        <p class="text-3 mt-3 text-pretty">
          Have a question about training, nutrition, or which program fits you best? Reach out—we'll
          help you find your next step forward.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-8 lg:grid lg:grid-cols-2">
      <div class="flex flex-col gap-4">
        <!-- Chat Button (WhatsApp) -->
        <ContactButton
          href="https://wa.me/{contactConfig.contact.whatsapp}"
          Icon={Chat}
          title="Chat"
          description="Chat directly with coach Rachel"
        />

        <!-- Call Button (Tel) -->
        <ContactButton
          href="tel:{contactConfig.contact.phoneNumber}"
          Icon={Call}
          title="Call us"
          description={contactConfig.contact.hours}
        />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  </div>
</section>
