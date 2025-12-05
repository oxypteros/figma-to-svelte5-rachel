<script lang="ts">
  import { inView } from "$lib/utils/animations";

  let { coached, rate, average, progress } = $props();

  const stats = $derived([
    {
      value: coached,
      label: "Women Coached",
      desc: "From postpartum recovery to full transformations"
    },
    {
      value: rate,
      label: "Consistency Rate",
      desc: "Clients report staying on track week after week"
    },
    {
      value: average,
      label: "Average Feedback",
      desc: "Based on client satisfaction and progress surveys"
    },
    {
      value: progress,
      label: "Faster Progress",
      desc: "From postpartum recovery to full transformations"
    }
  ]);
</script>

<section class="w-full py-14 md:py-24">
  <h2 class="sr-only">Statistics</h2>
  <div class="max-w-desktop-container mx-auto w-full px-4">
    <div
      use:inView
      class="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:justify-items-center lg:grid-cols-4"
    >
      {#each stats as stat, i}
        <div
          class="stat-card flex w-full max-w-55.5 flex-col"
          style="transition-delay: {i * 150}ms;"
        >
          <h3 class="flex flex-col gap-4">
            <span class="text-h2">{stat.value}</span>
            <span class="text-1">{stat.label}</span>
          </h3>
          <span class="text-3 text-bl-50 dark:text-wh-90/80 w-55.5">
            {stat.desc}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .stat-card {
    opacity: 0;
    transform: translateY(32px);
    transition:
      opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    will-change: opacity, transform;
  }

  /* Active triger when the praent div gets the class .enter */
  :global(.enter) .stat-card {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .stat-card {
      transition: none;
      opacity: 1;
      transform: none;
    }
  }
</style>
