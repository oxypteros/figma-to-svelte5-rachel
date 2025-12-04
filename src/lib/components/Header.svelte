<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { toggleMode } from "mode-watcher";
  import Logo from "~icons/rachel/logo";
  import Hamburger from "~icons/rachel/hamburger";
  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";
</script>

<header class="fixed top-0 z-50 w-full p-4">
  <div class="max-w-desktop-container mx-auto mt-4 w-full px-4 flex items-center justify-between">
    <nav
      aria-label="Collapsible menu"
      class="bg-bl-100/65 flex items-center justify-center rounded-full py-2 backdrop-blur-sm px-4"
    >
      <Logo class="text-wh-100" />
      <Button variant="icon" size="icon-lg" class="bg-transparent" aria-label="Open Menu">
        <Hamburger class="text-wh-100 h-4 w-5" />
      </Button>
    </nav>
    <Button onclick={toggleMode} variant="icon" size="icon-lg" class="group">
      <SunIcon
        class="text-wh-100 size-5 scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90 group-hover:text-bl-100 duration-300"
      />
      <MoonIcon
        class="absolute size-5 text-wh-100 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0 group-hover:text-bl-100 duration-300"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </div>
</header>
