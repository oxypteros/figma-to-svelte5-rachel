<script>
  import Handle from "~icons/rachel/handle";
  let sliderValue = $state(50);
  let { before, after } = $props();
</script>

<div
  class="group relative h-186 w-full max-w-186 touch-none overflow-hidden rounded-md select-none mx-auto"
>
  <!-- Input -->
  <input
    type="range"
    min="0"
    max="100"
    bind:value={sliderValue}
    class="peer absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
    aria-label="Compare before and after images"
  />

  <!-- Background (After) -->
  <img
    src="/img/results/{after}"
    decoding="auto"
    loading="lazy"
    alt="After result"
    class="absolute inset-0 h-full w-full object-cover object-center"
  />

  <!-- Foreground (Before) -->
  <img
    src="/img/results/{before}"
    decoding="auto"
    loading="lazy"
    alt="Before result"
    class="absolute inset-0 h-full w-full object-cover object-center"
    style="clip-path: inset(0 {100 - sliderValue}% 0 0);"
  />

  <!-- Divider -->
  <div
    class="bg-wh-100/40 pointer-events-none absolute inset-y-0 w-px peer-focus-visible:[&>div]:ring-[3px] text-wh-100 peer-focus-visible:[&>div]:ring-primary peer-focus-visible:[&>div]:ring-offset-[3px] peer-focus-visible:[&>div]:ring-offset-bl-100"
    style="left: {sliderValue}%; transform: translateX(-50%);"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-shadow duration-300"
    >
      <Handle />
    </div>
  </div>

  <!-- Badges -->
  <span
    class="border-wh-100/24 bg-wh-100/48 text-3 text-bl-100 absolute bottom-6 left-6 rounded-[6px] border px-4 py-[3px]"
    >Before</span
  >
  <span
    class="border-wh-100/24 bg-wh-100/48 text-3 text-bl-100 absolute right-6 bottom-6 rounded-[6px] border px-4 py-[3px]"
    >After</span
  >
</div>
