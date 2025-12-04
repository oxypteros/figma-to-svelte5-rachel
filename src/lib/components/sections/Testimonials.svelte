<script lang="ts">
  import { testimonials } from "$lib/data/testimonials";
  import Star from "~icons/rachel/star";

  // Render only the first testimonial from the testimonials json
  const current = testimonials[0];
</script>

<section class="bg-wh-100 text-bl-100 dark:bg-bl-90 dark:text-wh-100 w-full py-14 md:py-24">
  <h2 class="sr-only">Testimonials</h2>
  <div class="max-w-desktop-container mx-auto flex w-full px-4 md:items-center md:justify-center">
    <div class="flex flex-col gap-4">
      <div class="flex">
        <span class="sr-only">{current.stars} stars out of five</span>
        {#each Array(current.stars) as _}
          <Star class="text-yellow size-5" />
        {/each}
      </div>
      <q class="text-h6 md:text-h3 text-pretty sm:w-130 md:w-201.5">{current.quote}</q>
      <div class="flex items-center gap-4">
        <img
          width="64"
          height="64"
          src={current.image}
          alt={current.alt}
          loading="lazy"
          decoding="async"
          class="roounded-full bg-transparent object-cover"
        />
        <div class="flex flex-col">
          <span class="text-1">{current.name}</span>
          <span class="text-3 text-bl-50 dark:text-wh-90/80"
            >{current.program} - {current.date}</span
          >
        </div>
      </div>
    </div>
  </div>
</section>
