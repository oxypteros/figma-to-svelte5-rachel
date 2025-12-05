<script lang="ts">
  import PrimaryBtn from "$lib/components/ui/button/primary-button.svelte";
  import Faq from "$lib/components/ui/faq.svelte";
  import { faqData } from "$lib/data/faq";
</script>

<section id="faq-anchor" class="bg-wh-100 dark:bg-bl-90 w-full py-14 lg:py-24">
  <div
    class="max-w-desktop-container mx-auto flex w-full flex-col gap-10 px-4 lg:grid lg:grid-cols-2"
  >
    <div class="flex flex-col gap-4">
      <div>
        <h2 class="text-3 text-bl-50 dark:text-wh-90/80">FAQ</h2>
        <span class="text-h6 lg:text-h3 mt-0.5">Frequently Asked Questions</span>
        <p class="text-3 mt-3">
          If you're new here or wondering what to expect, these answers will guide you through how
          coaching works, what's included, and how we tailor every plan to your needs.
        </p>
      </div>
      <PrimaryBtn
        href="#faq-anchor"
        label="Send e-mail"
        class="bg-wh-100 text-bl-100 border-bl-100 hover:bg-wh-100 hover:text-bl-100 w-full border lg:w-fit"
      />
    </div>
    <Faq items={faqData} />
  </div>
</section>
