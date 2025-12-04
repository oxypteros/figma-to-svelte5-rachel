<script lang="ts">
  import { programs } from "$lib/data/programs";
  import ProgramCard from "$lib/components/ui/program-card.svelte";
</script>

<section id="programs-anchor" class="bg-wh-100 dark:bg-bl-90 w-full py-14 lg:py-24">
  <div class="max-w-desktop-container mx-auto flex w-full flex-col items-center gap-10 px-4">
    <div class="flex flex-col items-center text-center">
      <h2 class="text-3 text-bl-50 dark:text-wh-90/80">For you</h2>
      <span class="text-h6 lg:text-h3">Signature Programs!</span>
      <p class=" text-3 mt-3 max-w-140 text-balance">
        Choose the program that fits your goals, lifestyle, and pace. Every plan includes
        personalized workouts, nutrition guidance, and weekly support.
      </p>
    </div>
    <div class="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
      {#each programs as program}
        <ProgramCard data={program} />
      {/each}
    </div>
  </div>
</section>
