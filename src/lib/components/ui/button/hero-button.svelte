<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import ArrowRight from "~icons/rachel/arrow-right";
  import Calendar from "~icons/rachel/calendar";
</script>

<Button variant="cta" size="cta" class="group md:items-end md:justify-between ">
  <span class="md:flex md:flex-col md:items-start">
    <Calendar
      class="hidden md:block md:text-bl-100 md:group-hover:text-wh-100 md:size-6 md:transition-colors md:duration-300"
    />
    <span class=" hidden md:inline-block mt-2 md:text-3">30-min session</span>
    <span class="text-3">Book your call</span>
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
</Button>
