<script lang="ts">
  import FooterMenu from "$lib/components/ui/footer-menu.svelte";
  import SocialMenu from "$lib/components/ui/social-menu.svelte";
  import Logo from "~icons/rachel/logo";
  import Oxypteros from "~icons/rachel/oxypteros-logo";
  import Dject from "~icons/rachel/dject-logo";

  const startYear = 2025;
  const currentYear = new Date().getFullYear();

  const copyrightDate =
    currentYear > startYear ? `${startYear}-${currentYear.toString().slice(-2)}` : `${startYear}`;
</script>

<footer class="bg-wh-100 dark:bg-bl-90 mb-4 p-4">
  <div
    class=" max-w-desktop-container bg-bl-60 mx-auto flex min-h-112.5 w-full flex-col gap-10 rounded-md p-6 md:justify-between"
  >
    <div
      class="text-wh-100 flex w-full flex-col items-center gap-7 md:flex-row md:items-start md:justify-between"
    >
      <Logo class="h-[27px] w-[85px]" />
      <nav aria-label="Footer">
        <h2 class="sr-only">Site links</h2>
        <FooterMenu />
        <h2 class="sr-only">Social media</h2>
        <SocialMenu />
      </nav>
    </div>
    <div
      class="text-wh-100 text-3 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between"
    >
      <span>Copyright &copy; {copyrightDate} - All Right Reserved</span>
      <div class="flex flex-col items-center gap-2 md:flex-row md:gap-1">
        <div class="flex gap-1">
          Build by
          <a
            href="https://oxypteros.com"
            target="_blank"
            rel="noopener"
            aria-label="Oxypteros (opens in a new tab)"><Oxypteros class="hover:text-primary" /></a
          >
        </div>
        <span class="hidden md:block">•</span>
        <div class="flex gap-1">
          Designed by
          <a
            href="https://djectstudio.com/"
            target="_blank"
            rel="noopener"
            aria-label="Dject studio (opens in a new tab)"><Dject class="hover:text-primary" /></a
          >
        </div>
      </div>
    </div>
  </div>
</footer>
