<script lang="ts">
  import PrimaryBtn from "$lib/components/ui/button/primary-button.svelte";
</script>

<section id="how-to-anchor" class="bg-wh-100 dark:bg-bl-90 w-full py-14 lg:py-24">
  <div
    class="max-w-desktop-container mx-auto flex w-full flex-col gap-10 px-4 lg:grid lg:grid-cols-2"
  >
    <div class="flex flex-col gap-6">
      <div>
        <h2 class="text-3 text-bl-50">How it works</h2>
        <span class="text-h6 lg:text-h3 mt-0.5">Your path to lasting results</span>
        <p class="text-3 mt-3">
          Every transformation starts with structure. Here's how we turn goals into real
          progress—one step at a time.
        </p>
      </div>
      <PrimaryBtn
        href="#how-to-anchor"
        label="Book Your Free Call"
        class="lg:w-fit text-bl-100 hover:text-wh-100"
      />
      <div class="overflow-hidden rounded-sm sm:h-150 lg:h-103">
        <enhanced:img
          src="$lib/assets/img/rachel/how-to-1856w.webp"
          sizes="(min-width: 1040px) 277px, calc(100vw - 80px)"
          alt="Rachel standing confidently in athletic wear, representing strength and professionalism."
          loading="lazy"
          decoding="auto"
          class="h-full w-full object-cover object-top"
        />
      </div>
    </div>
    <div>
      <!-- Force VoiceOver/Safari with role="list" to recognize  as a list. -->
      <ol
        class="group/list flex h-full flex-col gap-10 [counter-reset:section] lg:justify-between"
        role="list"
      >
        <li class="group/item flex flex-col" role="listitem">
          <!-- Hide the numbers from screen readers because the `role="listitem"` already tells them it is a numbered Item.-->
          <span
            aria-hidden="true"
            class="text-1 text-bl-50 mb-0.5 [counter-increment:section] after:content-['0'_counter(section)]"
          ></span>

          <span class="text-h6 mb-px">Discovery call</span>
          <span class="text-bl-50 text-3"
            >We'll explore your goals, challenges, and lifestyle to create the right approach.</span
          >
        </li>
        <li class="group/item flex flex-col" role="listitem">
          <span
            aria-hidden="true"
            class="text-1 text-bl-50 mb-0.5 [counter-increment:section] after:content-['0'_counter(section)]"
          ></span>

          <span class="text-h6 mb-px">Personalized Plan</span>
          <span class="text-bl-50 text-3"
            >Training and nutrition tailored to your lifestyle—realistic,flexible, and sustainable.</span
          >
        </li>
        <li class="group/item flex flex-col" role="listitem">
          <span
            aria-hidden="true"
            class="text-1 text-bl-50 mb-0.5 [counter-increment:section] after:content-['0'_counter(section)]"
          ></span>

          <span class="text-h6 mb-px">Weekly Coaching</span>
          <span class="text-bl-50 text-3"
            >We'll explore your goals, challenges, and lifestyle to create the right approach.</span
          >
        </li>
        <li class="group/item flex flex-col" role="listitem">
          <span
            aria-hidden="true"
            class="text-1 text-bl-50 mb-0.5 [counter-increment:section] after:content-['0'_counter(section)]"
          ></span>

          <span class="text-h6 mb-px">Lifestyle Integration</span>
          <span class="text-bl-50 text-3"
            >We adapt your plan as your schedule, cycle, and needs shift.</span
          >
        </li>
        <li class="group/item flex flex-col" role="listitem">
          <span
            aria-hidden="true"
            class="text-1 text-bl-50 mb-0.5 [counter-increment:section] after:content-['0'_counter(section)]"
          ></span>

          <span class="text-h6 mb-px">Long-Term Balance</span>
          <span class="text-bl-50 text-3"
            >Progress doesn't end here—we'll refine, celebrate, and keep building together.</span
          >
        </li>
      </ol>
    </div>
  </div>
</section>
