<script lang="ts">
  import Plus from "~icons/rachel/plus";
  import Minus from "~icons/rachel/minus";
  import type { FaqItem } from "$lib/data/faq";

  let { items } = $props<{ items: FaqItem[] }>();
</script>

<div class="text-3">
  {#each items as item (item.id)}
    <details class="group">
      <summary
        class="flex cursor-pointer list-none items-center justify-between gap-2 py-6 [&::-webkit-details-marker]:hidden"
      >
        <span>{item.question}</span>

        <Plus class="transition-transform duration-300 group-open:hidden" />
        <Minus class="hidden transition-transform duration-300 group-open:block" />
      </summary>

      <p class="text-bl-60 dark:text-wh-90/80 pr-2 pb-6 pl-4 text-pretty">
        {item.answer}
      </p>
    </details>
  {/each}
</div>
