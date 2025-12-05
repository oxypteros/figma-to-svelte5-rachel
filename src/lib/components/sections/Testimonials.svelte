<script lang="ts">
  import { testimonials } from "$lib/data/testimonials";
  import Star from "~icons/rachel/star";
  import { inView } from "$lib/utils/animations";

  const current = testimonials[0];
</script>

<section class="w-full py-14 md:py-24">
  <h2 class="sr-only">Testimonials</h2>

  <div
    use:inView={{ rootMargin: "0px 0px -20% 0px" }}
    class="max-w-desktop-container mx-auto flex w-full px-4 md:items-center md:justify-center"
  >
    <div class="flex flex-col gap-4">
      <!-- STARS -->
      <div class="flex">
        <span class="sr-only">{current.stars} stars out of five</span>
        {#each Array(current.stars) as _, i}
          <div
            class="star-pop origin-center will-change-transform motion-reduce:transform-none"
            style="transition-delay: {i * 50}ms;"
          >
            <Star class="text-yellow size-5" />
          </div>
        {/each}
      </div>

      <!-- QUOTE -->
      <q class="reveal-text delay-200 text-h6 text-pretty sm:w-130 md:w-201.5 md:text-h3">
        {current.quote}
      </q>

      <!-- PROFILE -->
      <div class="reveal-up delay-400 flex items-center gap-4">
        <img
          width="64"
          height="64"
          src={current.image}
          alt={current.alt}
          loading="lazy"
          decoding="async"
          class="rounded-full bg-transparent object-cover"
        />
        <div class="flex flex-col">
          <span class="text-1">{current.name}</span>
          <span class="text-3 text-bl-50 dark:text-wh-90/80">
            {current.program} - {current.date}
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .star-pop {
    transform: scale(0);
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  :global(.enter) .star-pop {
    transform: scale(1);
  }

  .reveal-text {
    opacity: 0;
    transition: opacity 1s ease-out;
  }

  :global(.enter) .reveal-text {
    opacity: 1;
  }

  .reveal-up {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
  }

  :global(.enter) .reveal-up {
    opacity: 1;
    transform: translateY(0);
  }

  .delay-200 {
    transition-delay: 200ms;
  }
  .delay-400 {
    transition-delay: 400ms;
  }

  @media (prefers-reduced-motion: reduce) {
    .star-pop,
    .reveal-text,
    .reveal-up {
      transition: none;
      transform: none;
      opacity: 1;
    }
  }
</style>
