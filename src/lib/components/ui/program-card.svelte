<script lang="ts">
  import GraphBars from "~icons/rachel/graph-bars";
  import Check from "~icons/rachel/check";
  import PrimaryBtn from "$lib/components/ui/button/primary-button.svelte";
  import type { Program } from "$lib/data/programs";

  let { data }: { data: Program } = $props();

  // Styles for the 2 variants
  const styles = {
    default: {
      card: "bg-wh-80 dark:bg-bl-60",
      iconBox: "bg-wh-100 text-bl-100 dark:bg-bl-90 dark:text-wh-100",
      badge:
        "bg-wh-100 text-bl-100 dark:bg-bl-90 dark:text-bl-90 text-3 rounded px-3 h-10 flex items-center",
      headerText: "text-bl-100 dark:text-wh-100",
      list: "text-bl-100 dark:text-wh-100 "
    },
    primary: {
      card: "bg-primary",
      iconBox: "bg-bl-80 text-wh-100 dark:bg-wh-100 dark:text-bl-90",
      badge:
        "bg-bl-80 text-wh-100 dark:bg-wh-100 dark:text-bl-90 text-3 rounded px-3 h-10 flex items-center",
      headerText: "text-bl-100",
      list: "text-bl-100 dark:text-bl-100"
    }
  };

  const currentStyle = $derived(styles[data.variant]);
</script>

<div
  id="{data.id}-anchor"
  class="{currentStyle.card} flex h-full flex-col justify-between gap-8 rounded-md p-5"
>
  <!-- Header Section -->
  <div class="{currentStyle.headerText} flex flex-col gap-2">
    <!-- Icon & Badge Row -->
    <div class="flex w-full items-center justify-between">
      <div class="{currentStyle.iconBox} flex size-10 items-center justify-center rounded">
        <GraphBars />
      </div>

      <!-- Conditional Badge Render -->
      {#if data.badge}
        <div class={currentStyle.badge}>{data.badge}</div>
      {/if}
    </div>

    <h3 class="text-1">{data.title}</h3>

    <div class="text-h4">
      ${data.price}<span class="text-3">/month</span>
    </div>

    <p class="text-3">
      {data.description}
    </p>
  </div>

  <!-- Features Section -->
  <div class={currentStyle.list}>
    <h4 class="text-3 mb-2">What's included</h4>
    <ul class="text-3 space-y-2">
      {#each data.features as feature}
        <li class="flex items-center gap-2">
          <Check class="size-4 shrink-0" />
          {feature}
        </li>
      {/each}
    </ul>
  </div>

  <!-- Button -->
  <PrimaryBtn
    href="#{data.id}-anchor"
    label="Join the Program"
    class="bg-wh-100 dark:bg-bl-90 dark:text-wh-100 dark:hover:bg-bl-100 dark:border-none border-bl-100 hover:bg-wh-100 hover:text-bl-100 w-full border"
    aria={data.ariaLabel}
  />
</div>
