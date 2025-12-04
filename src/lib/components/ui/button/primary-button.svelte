<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import ArrowRight from "~icons/rachel/arrow-right";
  import { cn } from "$lib/utils";
  let {
    href = undefined,
    class: className = undefined,
    aria = undefined,
    label,
    ...rest
  } = $props();
</script>

<Button
  {...rest}
  {href}
  variant="primary"
  size="primary"
  class={cn("group", className)}
  aria-label={aria}
>
  <span class="text-3">{label}</span>
  <span
    class="bg-bl-90 dark:bg-wh-100 dark:group-hover:bg-primary group-hover:bg-primary relative flex size-10 items-center justify-center overflow-hidden rounded transition-colors duration-300"
  >
    <ArrowRight
      class="text-wh-100 dark:text-bl-90 group-hover:text-bl-100 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]"
    />

    <ArrowRight
      class="text-wh-100 group-hover:text-bl-90 absolute size-5 -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"
    />
  </span>
</Button>
