<script lang="ts">
  import videoWebm from "$lib/assets/videos/rachel-video.webm";
  import videoMp4 from "$lib/assets/videos/output.mp4";
  import videoPoster from "$lib/assets/videos/video-poster.webp";
  import Signature from "~icons/rachel/signature";
  import Fire from "~icons/rachel/fire";
  import Lightning from "~icons/rachel/lightning";
  import Crown from "~icons/rachel/crown";
  import Logos from "$lib/components/ui/logos.svelte";
  import { inView } from "$lib/utils/animations";

  function lazyPlay(node: HTMLVideoElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.play();
        } else {
          node.pause();
        }
      });
    });
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }
</script>

<section id="introduction-anchor" class="w-full py-14 md:py-24">
  <div
    use:inView
    class="max-w-desktop-container mx-auto flex w-full flex-col items-center gap-10 px-4 lg:flex-row lg:items-stretch lg:justify-between"
  >
    <!-- VIDEO -->
    <div
      class="reveal bg-bl-60 relative aspect-544/720 w-full max-w-150 overflow-hidden rounded-xl"
    >
      <video
        use:lazyPlay
        width="544"
        height="720"
        poster={videoPoster}
        preload="none"
        loop
        muted
        playsinline
        tabindex="-1"
        class="object-cover h-full w-full rounded-xl object-center"
        aria-label="Close-up portrait video of Rachel Stone looking confident"
      >
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>
    </div>

    <div class="flex w-full max-w-150 shrink flex-col justify-between lg:max-w-120">
      <div>
        <div class="reveal delay-150">
          <span class="text-3 text-bl-50 dark:text-wh-90/80">Meet your coach</span>
          <h2 class="text-h6 lg:text-h3">Hi, I'm Rachel Stone</h2>
          <article class="text-3 mt-2 space-y-4">
            <p>
              For years, I thought strength meant doing more — training harder, eating cleaner,
              sleeping less. I pushed through exhaustion, believing discipline would bring freedom.
              It didn't.
            </p>
            <p>
              When burnout finally forced me to slow down, I started listening. I studied how
              movement, hormones, rest, and mindset work together — and rebuilt my strength through
              awareness, not pressure.
            </p>
            <p>
              Now I help women do the same: feel capable and confident again without sacrificing
              themselves to get there. My approach blends science and empathy — habit-based,
              psychology-first, and built for lasting balance.
            </p>

            <div class="reveal delay-400 mt-20 flex justify-end">
              <span class="sr-only">Rachel Stone</span>
              <Signature class="h-11 w-37" />
            </div>
          </article>
        </div>
      </div>

      <div class="mt-8 flex flex-col gap-4">
        <h3 class="reveal delay-500 text-1">My Philosophy</h3>
        <ul class="text-3 flex w-full flex-col gap-4 md:flex-row">
          <li class="reveal delay-600 philosophy-card">
            <Fire class="size-8" />
            <span>Strength Over Comparison</span>
          </li>
          <li class="reveal delay-700 philosophy-card">
            <Lightning class="size-8" />
            <span>Balance Over Extremes</span>
          </li>
          <li class="reveal delay-800 philosophy-card">
            <Crown class="size-8" />
            <span>Habits Over Quick Fixes</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div>
    <Logos />
  </div>
</section>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
    will-change: opacity, transform;
  }

  :global(.enter) .reveal {
    opacity: 1;
    transform: translateY(0);
  }

  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-400 {
    transition-delay: 400ms;
  }
  .delay-500 {
    transition-delay: 500ms;
  }
  .delay-600 {
    transition-delay: 600ms;
  }
  .delay-700 {
    transition-delay: 700ms;
  }
  .delay-800 {
    transition-delay: 800ms;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>
