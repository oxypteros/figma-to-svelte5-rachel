<script lang="ts">
  let { coached, rate, average, progress } = $props();
</script>

<section class="bg-wh-100 text-bl-100 dark:bg-bl-90 dark:text-wh-100 w-full py-14 md:py-24">
  <h2 class="sr-only">Statistics</h2>
  <div class="max-w-desktop-container mx-auto w-full px-4">
    <div
      class="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:justify-items-center lg:grid-cols-4"
    >
      <!-- Item 1: Coached -->
      <div class="flex w-full max-w-55.5 flex-col">
        <h3 class="flex flex-col gap-4">
          <span class="text-h2">{coached}</span>
          <span class="text-1">Women Coached</span>
        </h3>
        <span class="text-3 text-bl-50 dark:text-wh-90/80 w-55.5"
          >From postpartum recovery to full transformations</span
        >
      </div>

      <!-- Item 2: Rate -->
      <div class="flex w-full max-w-55.5 flex-col">
        <h3 class="flex flex-col gap-4">
          <span class="text-h2">{rate}</span>
          <span class="text-1">Consistency Rate</span>
        </h3>
        <span class="text-3 text-bl-50 dark:text-wh-90/80 w-55.5"
          >Clients report staying on track week after week</span
        >
      </div>

      <!-- Item 3: Average -->
      <div class="flex w-full max-w-55.5 flex-col">
        <h3 class="flex flex-col gap-4">
          <span class="text-h2">{average}</span>
          <span class="text-1">Average Feedback</span>
        </h3>
        <span class="text-3 text-bl-50 dark:text-wh-90/80 w-55.5"
          >Based on client satisfaction and progress surveys</span
        >
      </div>

      <!-- Item 4: Progress -->
      <div class="flex w-full max-w-55.5 flex-col">
        <h3 class="flex flex-col gap-4">
          <span class="text-h2">{progress}</span>
          <span class="text-1">Faster Progress</span>
        </h3>
        <span class="text-3 text-bl-50 dark:text-wh-90/80 w-55.5"
          >From postpartum recovery to full transformations</span
        >
      </div>
    </div>
  </div>
</section>
