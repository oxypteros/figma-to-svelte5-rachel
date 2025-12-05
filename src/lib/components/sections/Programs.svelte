<script lang="ts">
  import { programs } from "$lib/data/programs";
  import ProgramCard from "$lib/components/ui/program-card.svelte";
  import { inView } from "$lib/utils/animations";
</script>

<section id="programs-anchor" class="bg-wh-100 dark:bg-bl-90 w-full py-14 lg:py-24">
  <div class="max-w-desktop-container mx-auto flex w-full flex-col items-center gap-10 px-4">
    <div use:inView class="reveal flex flex-col items-center text-center">
      <h2 class="text-3 text-bl-50 dark:text-wh-90/80">For you</h2>
      <span class="text-h6 lg:text-h3">Signature Programs!</span>
      <p class=" text-3 mt-3 max-w-140 text-balance">
        Choose the program that fits your goals, lifestyle, and pace. Every plan includes
        personalized workouts, nutrition guidance, and weekly support.
      </p>
    </div>

    <div class="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
      {#each programs as program, i}
        <!-- i * 150 means: 1st card = 0ms, 2nd card = 150ms, 3rd card = 300ms -->
        <div use:inView class="reveal h-full" style="transition-delay: {i * 150}ms;">
          <ProgramCard data={program} />
        </div>
      {/each}
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

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      transition: none;
      opacity: 1;
      transform: none;
    }
  }
</style>
