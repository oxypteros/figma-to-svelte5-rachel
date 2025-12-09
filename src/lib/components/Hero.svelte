<script lang="ts">
  import HeroButton from "$lib/components/ui/button/hero-button.svelte";
  import user1 from "$lib/assets/img/users/user-1.webp";
  import user2 from "$lib/assets/img/users/user-2.webp";
  import Warranty from "~icons/rachel/warranty";
  import Star from "~icons/rachel/star";
</script>

<section
  class="absolute -top-115 h-115 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0)_35%)]"
>
  <div class="max-w-desktop-container mx-auto w-full px-4">
    <div
      class="flex h-115 flex-col justify-end md:flex-row md:items-end md:justify-between md:gap-20"
    >
      <div class="mb-6 md:mb-10">
        <div
          class="bg-bl-80 dark:bg-wh-100 text-wh-100 dark:text-bl-90 mb-6 flex w-fit items-center gap-2.5 rounded-full px-4 py-2"
        >
          <Warranty class="text-wh-100 size-6 dark:text-bl-90" />
          <span class="text-3">30-Day Money-back Guarantee</span>
        </div>
        <div class="mb-4 flex items-center gap-2">
          <div
            class="bg-bl-80 dark:bg-wh-100 border-bl-80 flex w-fit items-center gap-1 rounded-full p-0.5"
          >
            <img
              width="40"
              height="40"
              src={user1}
              alt="A smiling woman with an orange bandana"
              class="object-cover"
              decoding="async"
              loading="eager"
            />
            <img
              width="40"
              height="40"
              src={user2}
              alt="A happy smiling woman with thick curly hair"
              class="object-cover"
              decoding="async"
              loading="eager"
            />
          </div>
          <div class="text-wh-100 flex flex-col">
            <span class="text-3 mb-px">Trusted by 2,000+ clients worldwide</span>
            <div class="flex">
              <Star class="text-yellow size-5" /><span class="text-3 ml-1"
                >Rated 4.9 out of 5.0</span
              >
            </div>
          </div>
        </div>
        <h1 class="text-wh-100 text-h5 md:text-h1 will-change-transform"
          style="text-rendering: optimizeSpeed;">
          Because your best self isn't behind you, it's ahead
        </h1>
      </div>
      <div class="flex w-full flex-col md:max-w-69.5">
        <HeroButton />
        <div class="mt-2 mb-6 md:mb-10">
          <span class="text-wh-100/80 text-3">No pressure. Just a clear path forward</span>
        </div>
      </div>
    </div>
  </div>
</section>
