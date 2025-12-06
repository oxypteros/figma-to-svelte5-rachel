<script lang="ts">
  import { headerMenuItems } from "$lib/data/header-menu";
  let { onclick } = $props<{ onclick?: () => void }>();
</script>

<ul class="flex flex-col gap-4 text-left min-w-32 py-4">
  {#each headerMenuItems as item}
    <li>
      <a
        href={item.href}
        {onclick}
        class="text-1 block text-wh-100 hover:text-primary transition-colors duration-300"
        aria-label={item.label}
      >
        {item.id}
      </a>
    </li>
  {/each}
</ul>
