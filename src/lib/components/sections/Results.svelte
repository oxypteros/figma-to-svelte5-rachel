<script lang="ts">
  import Slider from "$lib/components/ui/slider.svelte";
  import ResultTestimonial from "$lib/components/ui/result-testimonial.svelte";
</script>

<section id="results-anchor" class="bg-wh-100 dark:bg-bl-90 w-full py-14 lg:py-24">
  <div
    class="max-w-desktop-container mx-auto grid w-full grid-cols-1 gap-8 px-4 lg:grid-cols-2 items-center"
  >
    <div class="flex flex-col gap-12">
      <div>
        <h2 class="text-3 text-bl-50 dark:text-wh-90/80">Results</h2>
        <span class="mb-3 text-h6 lg:text-h3">Progress you can see</span>
        <p class="text-3">
          Every transformation tells a story. These programs are build to help you move better, feel
          stronger, and see steady progress, without extremes, burnout, or quick fixes.
        </p>
      </div>
      <ResultTestimonial />
    </div>
    <Slider before="before.webp" after="after.webp" />
  </div>
</section>
