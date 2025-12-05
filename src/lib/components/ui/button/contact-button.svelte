<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import ArrowRight from "~icons/rachel/arrow-right";
  import type { Component } from "svelte";

  let { href, title, description, Icon } = $props<{
    href: string;
    title: string;
    description: string;
    Icon: Component<any>;
  }>();
</script>

<Button
  {href}
  target="_blank"
  variant="contact"
  size="contact"
  class="group flex grow flex-col items-start justify-between"
>
  <Icon class="size-8" />

  <span class="flex w-full items-center justify-between">
    <span class="flex flex-col items-start">
      <span class="text-1">{title}</span>
      <span class="text-3 text-bl-50 dark:text-wh-90/80">{description}</span>
    </span>

    <span
      class="bg-bl-80 group-hover:bg-primary relative flex size-10 items-center justify-center overflow-hidden rounded transition-colors duration-300"
    >
      <ArrowRight
        class="text-wh-100 group-hover:text-bl-100 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]"
      />

      <ArrowRight
        class="text-wh-100 group-hover:text-bl-100 absolute size-5 -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"
      />
    </span>
  </span>
</Button>
