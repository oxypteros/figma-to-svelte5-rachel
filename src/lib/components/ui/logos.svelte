<script lang="ts">
  import Issa from "~icons/rachel/issa";
  import Nasm from "~icons/rachel/nasm";
  import Ace from "~icons/rachel/ace";
  import Afaa from "~icons/rachel/afaa";
</script>

<div
  class="bg-wh-100 dark:bg-bl-90 mt-10 w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] p-8"
>
  <h3 class="sr-only">Certifications</h3>
  <ul class="sr-only">
    <li class="sr-only">Certified by the International Sports Sciences Association</li>
    <li class="sr-only">National Academy of Sports Medicine Certified</li>
    <li class="sr-only">American Council on Exercise Certified</li>
    <li class="sr-only">Athletics and Fitness Association of America</li>
    <li class="sr-only">International Sports Sciences Association</li>
  </ul>

  <div class="animate-marquee flex w-max items-center opacity-20">
    <!-- SET 1 -->
    <div class="flex items-center gap-16 pr-16 text-bl-100 dark:text-wh-100">
      <Issa />
      <Nasm />
      <Ace />
      <Afaa />
      <Issa />
      <Nasm />
      <Ace />
      <Afaa />
    </div>
    <!-- SET 2 -->
    <div class="flex items-center gap-16 pr-16 text-bl-100 dark:text-wh-100" aria-hidden="true">
      <Issa />
      <Nasm />
      <Ace />
      <Afaa />
      <Issa />
      <Nasm />
      <Ace />
      <Afaa />
    </div>
  </div>
</div>

<style>
  @keyframes marquee {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }

  .animate-marquee {
    will-change: transform;
    animation: marquee 20s linear infinite;
  }
</style>
