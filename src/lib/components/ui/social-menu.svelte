<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { socialItems } from "$lib/data/socials";

  import Instagram from "~icons/rachel/instagram";
  import X from "~icons/rachel/x";
  import YouTube from "~icons/rachel/youtube";
  import Email from "~icons/rachel/email";
  import Github from "~icons/rachel/github";

  // String Name -> Actual Component
  const iconMap = {
    Github,
    Instagram,
    X,
    YouTube,
    Email
  };
</script>

<ul class="mt-8 flex w-full flex-row gap-2 md:mt-4 md:justify-end">
  {#each socialItems as item}
    {@const IconComponent = iconMap[item.icon]}
    {@const isExternal = item.inTab !== false}
    <li>
      <Button
        href={item.href}
        target={isExternal ? "_blank" : null}
        rel={isExternal ? "noopener" : null}
        variant="social"
        size="social"
        class="group"
        aria-label={item.label}
      >
        <IconComponent class="size-4 transition-all duration-300 group-hover:scale-130" />
      </Button>
    </li>
  {/each}
</ul>
