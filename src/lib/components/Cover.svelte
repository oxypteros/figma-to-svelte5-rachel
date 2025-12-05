<script lang="ts">
  let y = $state(0);
</script>

<svelte:window bind:scrollY={y} />
<div class="sticky top-0 -z-50 h-screen w-full overflow-hidden bg-bl-80">
  <div class="absolute inset-0 h-full w-full">
    <img
      decoding="async"
      loading="eager"
      fetchpriority="high"
      width="2912"
      height="1632"
      src="/img/cover/2912w.webp"
      srcset="
        /img/cover/640w.webp 640w,
        /img/cover/768w.webp 768w,
        /img/cover/1024w.webp 1024w,
        /img/cover/1280w.webp 1280w,
        /img/cover/1536w.webp 1536w,
        /img/cover/1920w.webp 1920w,
        /img/cover/2560w.webp 2560w,
        /img/cover/2912w.webp 2912w
    "
      sizes="125vw"
      alt="Rachel, personal trainer"
      style="--y: {-y * 0.5}px;"
      class="aspect-91/51 h-full w-full transform-[translate3d(0,var(--y),0)_scale(1.25)] object-cover object-[80%_15%] will-change-transform"
    />
  </div>
</div>
