<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import PrimaryBtn from "$lib/components/ui/button/primary-button.svelte";

  let isSubmitting = $state(false);
  let isSuccess = $state(false);

  const handleSubmit: SubmitFunction = () => {
    isSubmitting = true;

    return async ({ update, result }) => {
      await update();
      isSubmitting = false;

      if (result.type === "success") {
        isSuccess = true;
        // Reset success message after 9 seconds
        setTimeout(() => (isSuccess = false), 9000);
      }
    };
  };
</script>

<h3 class="text-h6 mb-4">Send a Message</h3>

{#if isSuccess}
  <!-- SUCCESS STATE -->
  <div
    class="bg-wh-80 dark:bg-bl-60 border-2 border-green-700 text-bl-100 dark:text-wh-100 px-4 py-3 rounded relative w-fit mx-auto"
    role="alert"
  >
    <strong class="text-2">Message Sent!</strong>
    <span class="block text-3">I'll get back to you shortly.</span>
  </div>
{:else}
  <!-- FORM STATE -->
  <!-- action="?/contact": the specific action in +page.server.ts -->
  <form method="POST" action="?/contact" use:enhance={handleSubmit} class="flex flex-col gap-6">
    <label for="full-name" class="text-3">Full name </label>
    <input
      id="full-name"
      type="text"
      required
      aria-required="true"
      name="Full name"
      placeholder="Enter your full name"
      class="p-4 text-3 text-bl-50 dark:text-wh-90/80 w-full bg-wh-100 dark:bg-bl-90"
    />
    <label for="email" class="text-3">Email</label>
    <input
      id="email"
      type="email"
      required
      aria-required="true"
      name="email"
      placeholder="hello@oxypteros.com"
      class="p-4 text-3 text-bl-50 dark:text-wh-90/80 w-full bg-wh-100 dark:bg-bl-90"
    />
    <label for="message" class="text-3">Message</label>
    <textarea
      id="message"
      required
      name="Message"
      aria-required="true"
      rows="3"
      placeholder="Tell me about your project..."
      class="p-4 text-3 text-bl-50 dark:text-wh-90/80 w-full resize-none bg-wh-100 dark:bg-bl-90 border-b-2 border-bl-100/10"
    ></textarea>
    <PrimaryBtn
      label={isSubmitting ? "Sending..." : "Send Message"}
      type="submit"
      disabled={isSubmitting}
      class="text-bl-100 hover:text-wh-100"
    />
  </form>
{/if}
