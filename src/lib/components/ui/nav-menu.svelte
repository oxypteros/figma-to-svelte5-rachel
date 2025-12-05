<script lang="ts">
  import { menuItems } from "$lib/data/menu";
  let { onclick } = $props<{ onclick?: () => void }>();
</script>

<ul class="flex flex-col gap-4 text-left min-w-32 p-4">
  {#each menuItems as item}
    <li>
      <a
        href={item.href}
        {onclick}
        class="text-1 block text-wh-100 hover:text-primary transition-colors duration-300"
      >
        {item.label}
      </a>
    </li>
  {/each}
</ul>
