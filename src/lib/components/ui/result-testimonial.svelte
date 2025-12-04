<script lang="ts">
  import { results } from "$lib/data/results";
  import Star from "~icons/rachel/star";

  // Render only the first testimonial from the results json
  const current = results[0];
</script>

<div>
  <img
    width="64"
    height="64"
    src={current.image}
    alt={current.alt}
    loading="lazy"
    decoding="async"
    class="roounded-full bg-transparent object-cover"
  />
  <div class="text-1 mt-2">{current.name}</div>
  <div class="text-3 text-bl-50 dark:text-wh-90/80">{current.program}</div>

  <div class="flex my-5">
    <span class="sr-only">{current.stars} stars out of five</span>
    {#each Array(current.stars) as _}
      <Star class="text-yellow size-5" />
    {/each}
  </div>

  <q class="text-2 sm:text-3 text-pretty">{current.quote}</q>
</div>
