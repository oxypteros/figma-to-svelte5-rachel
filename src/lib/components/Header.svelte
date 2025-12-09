<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { toggleMode } from "mode-watcher";
  import HeaderMenu from "$lib/components/ui/header-menu.svelte";
  import SocialMenu from "$lib/components/ui/social-menu.svelte";

  import Logo from "~icons/rachel/logo";
  import Hamburger from "~icons/rachel/hamburger";
  import Close from "@lucide/svelte/icons/x";
  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";

  let isOpen = $state(false);
  let navRef = $state<HTMLElement | null>(null);

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }

  function onWindowClick(event: MouseEvent) {
    if (!isOpen || !navRef) return;
    if (!navRef.contains(event.target as Node)) {
      closeMenu();
    }
  }
</script>

<svelte:window onclick={onWindowClick} onkeydown={(e) => e.key === "Escape" && closeMenu()} />

<header class="fixed top-0 z-50 w-full pt-4">
  <div class="max-w-desktop-container mx-auto mt-4 w-full px-4 flex items-start justify-between">
    <nav
      bind:this={navRef}
      aria-label="Main navigation"
      class="relative z-50 flex flex-col bg-bl-100/65 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
       {isOpen ? 'rounded-md p-4 max-w-fit' : 'rounded-4xl px-4 py-2 max-w-39.5'}"
    >
      <div class="flex w-full items-center justify-between">
        <Logo class="text-wh-100 shrink-0" />
        <Button
          onclick={toggleMenu}
          variant="icon"
          size="icon-lg"
          class="bg-transparent dark:bg-transparent relative group shrink-0"
          aria-label="Toggle Main Menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <div class="relative flex items-center justify-center">
            <div
              class="absolute transition-all duration-300 {isOpen
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-50'}"
            >
              <Close class="text-wh-100 size-6" />
            </div>

            <div
              class="transition-all duration-300 {isOpen
                ? 'opacity-0 rotate-90 scale-50'
                : 'opacity-100 rotate-0 scale-100'}"
            >
              <Hamburger class="text-wh-100 size-6" />
            </div>
          </div>
        </Button>
      </div>
      <div
        class="grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
               {isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0 pt-0'}"
      >
        <div class="overflow-hidden min-w-40 px-2">
          <HeaderMenu onclick={closeMenu} />
          <SocialMenu />
        </div>
      </div>
    </nav>

    <!-- Theme toggle -->
    <Button onclick={toggleMode} variant="icon" size="icon-lg" class="group backdrop-blur-sm">
      <SunIcon
        class="text-wh-100 size-5 scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90 group-hover:text-bl-100 duration-300"
      />
      <MoonIcon
        class="absolute size-5 text-wh-100 group-hover:text-bl-100 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0  duration-300"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </div>
</header>
