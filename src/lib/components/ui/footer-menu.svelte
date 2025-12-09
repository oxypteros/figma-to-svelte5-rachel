<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { footerMenuItems } from "$lib/data/footer-menu";
</script>

<ul class="text-1 space-y-4 text-center md:flex md:flex-row md:space-y-0 md:space-x-4">
  {#each footerMenuItems as item (item.id)}
    <li>
      <Button href={item.href} variant="nav" aria-label={item.label}>
        {item.id}
      </Button>
    </li>
  {/each}
</ul>
