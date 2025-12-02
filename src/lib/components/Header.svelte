<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Logo from "~icons/rachel/logo";
  import Hamburger from "~icons/rachel/hamburger";
</script>

<header class="fixed top-0 z-50 w-full p-4">
  <div class="mx-auto mt-4 w-full max-w-desktop-container px-4">
    <nav
      aria-label="Collapsible menu"
      class="bg-bl-100/65 flex w-39 items-center justify-center rounded-full py-2 backdrop-blur-sm"
    >
      <Logo class="text-wh-100 h-5.5 w-17" />
      <Button variant="icon" size="icon-lg" aria-label="Open Menu">
        <Hamburger class="text-wh-100 h-4 w-7" />
      </Button>
    </nav>
  </div>
</header>
