<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { headerMenuItems } from "$lib/data/header-menu";
  let { onclick } = $props<{ onclick?: () => void }>();
</script>

<ul class="text-1 flex flex-col gap-4 text-left min-w-32 py-4">
  {#each headerMenuItems as item (item.id)}
    <li>
      <Button href={item.href} {onclick} variant="nav" aria-label={item.label}>
        {item.id}
      </Button>
    </li>
  {/each}
</ul>
