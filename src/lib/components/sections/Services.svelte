<script lang="ts">
  import PrimaryBtn from "$lib/components/ui/button/primary-button.svelte";
  import Camera from "~icons/rachel/camera";
  import List from "~icons/rachel/list";
  import Users from "~icons/rachel/users";
  import { inView } from "$lib/utils/animations";
</script>

<section id="services-anchor" class="bg-bl-80 dark:bg-bl-90 w-full py-14 lg:py-24">
  <div
    class="max-w-desktop-container text-wh-100 mx-auto w-full px-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10"
  >
    <div use:inView={{ rootMargin: "0px 0px -20% 0px" }} class="header-anim lg:max-w-108">
      <h2 class="text-3">Services</h2>
      <span class="text-h6 lg:text-h3 text-balance block">
        Choose the support that fits your life
      </span>
      <p class="text-2 mt-3 mb-4 text-balance sm:text-pretty">
        Flexible options to fit every budget and lifestyle, all packages includes nutrition guidance
        and on-going weekly support.
      </p>
      <PrimaryBtn
        href="#services-anchor"
        label="Get Started with Rachel"
        class="text-bl-100 hover:text-wh-100"
      />
    </div>

    <div
      use:inView={{ rootMargin: "0px 0px -20% 0px" }}
      class="grid-anim mt-10 grid grid-cols-1 grid-rows-[200px_200px_200px_416px] gap-4 lg:grid-cols-2 lg:grid-rows-[1fr_1fr_2fr]"
    >
      <!-- Card 1 -->
      <div
        class="bento-card bg-bl-60 flex flex-col justify-between rounded-md p-6 lg:col-span-1 lg:row-start-1 lg:row-end-3"
        style="transition-delay: 0ms;"
      >
        <span class="text-h6 lg:text-h1">NYC</span>
        <div>
          <h3 class="text-1">In-Person Training</h3>
          <p class="text-3 pt-1 opacity-70">
            Train face-to-face with personalized coaching and real-time feedback.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="bento-card bg-bl-60 flex flex-col justify-between rounded-md p-6 lg:col-start-2 lg:col-end-2 lg:row-span-1"
        style="transition-delay: 150ms;"
      >
        <Camera class="text-wh-100" />
        <div>
          <h3 class="text-1">Online Coaching</h3>
          <p class="text-3 pt-1 opacity-70">
            Flexible sessions from anywhere—your program, your schedule.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="bento-card bg-bl-60 flex flex-col justify-between rounded-md p-6 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3"
        style="transition-delay: 300ms;"
      >
        <List class="text-wh-100" />
        <div>
          <h3 class="text-1">Nutrition plans</h3>
          <p class="text-3 pt-1 opacity-70">
            Tailored guidance to support your training and daily routine.
          </p>
        </div>
      </div>

      <!-- Card 4 -->
      <div
        class="bento-card bg-bl-60 grid grid-cols-1 grid-rows-[112px_240px] gap-4 rounded-md p-6 lg:col-span-2 lg:col-end-3 lg:row-start-3 lg:grid-cols-2 lg:grid-rows-1"
        style="transition-delay: 450ms;"
      >
        <div class="flex flex-col justify-between">
          <Users class="text-wh-100" />
          <div>
            <h3 class="text-1">Business or Group Training</h3>
            <p class="text-3 pt-1 opacity-70">
              Designed for teams or partners who want shared motivation and accountability.
            </p>
          </div>
        </div>
        <div class="overflow-hidden rounded-sm lg:h-92">
          <enhanced:img
            src="$lib/assets/img/rachel/services-928w.webp"
            sizes="(min-width: 1040px) 277px, calc(100vw - 80px)"
            alt="Warm close-up of Rachel smiling..."
            loading="lazy"
            decoding="auto"
            class="image-reveal h-full w-full object-cover object-top transition-transform duration-1200 ease-out scale-110"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .header-anim {
    opacity: 0;
    transform: translateY(2rem);
    transition:
      opacity 900ms ease-out,
      transform 900ms ease-out;
    will-change: opacity, transform;
  }

  :global(.header-anim.enter) {
    opacity: 1;
    transform: translateY(0);
  }

  /* Target the children (.bento-card) when the paremt (.grid-anim) has .enter*/
  .bento-card {
    opacity: 0;
    transform: scale(0.96) translateY(30px);
    transition:
      opacity 800ms ease-out,
      transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
  }

  /* Keep the space: ".grid-anim.enter .bento-card"*/
  :global(.grid-anim.enter) .bento-card {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  :global(.grid-anim.enter) .image-reveal {
    transform: scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .header-anim,
    .bento-card,
    .image-reveal {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
</style>
