<script lang="ts">
  import { footerMenuItems } from "$lib/data/footer-menu";
</script>

<ul class="text-1 space-y-4 text-center md:flex md:flex-row md:space-y-0 md:space-x-4">
  {#each footerMenuItems as item}
    <li>
      <a
        href={item.href}
        class="text-1 block text-wh-100 hover:text-primary transition-colors duration-300"
        aria-label={item.label}
      >
        {item.id}
      </a>
    </li>
  {/each}
</ul>
