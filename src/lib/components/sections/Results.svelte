<script lang="ts">
  import Slider from "$lib/components/ui/slider.svelte";
  import ResultTestimonial from "$lib/components/ui/result-testimonial.svelte";
  import { inView } from "$lib/utils/animations";
</script>

<section id="results-anchor" class="bg-wh-100 dark:bg-bl-90 w-full py-14 lg:py-24">
  <div
    class="max-w-desktop-container mx-auto grid w-full grid-cols-1 gap-8 px-4 lg:grid-cols-2 items-center"
  >
    <div class="flex flex-col gap-12">
      <div use:inView class="reveal">
        <h2 class="text-3 text-bl-50 dark:text-wh-90/80">Results</h2>
        <span class="mb-3 text-h6 lg:text-h3">Progress you can see</span>
        <p class="text-3">
          Every transformation tells a story. These programs are build to help you move better, feel
          stronger, and see steady progress, without extremes, burnout, or quick fixes.
        </p>
      </div>
      <!-- Wrap this so the animation doesn't mess with the components layout -->
      <div use:inView class="reveal delay-200">
        <ResultTestimonial />
      </div>
    </div>
    <div use:inView class="reveal delay-400 w-full">
      <Slider before="before.webp" after="after.webp" />
    </div>
  </div>
</section>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: opacity, transform;
  }
  .reveal:global(.enter) {
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
    .reveal {
      transition: none;
      opacity: 1;
      transform: none;
    }
  }
</style>
