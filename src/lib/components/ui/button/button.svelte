<script lang="ts" module>
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import { type VariantProps, tv } from "tailwind-variants";

  export const buttonVariants = tv({
    base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer duration-300",
    variants: {
      variant: {
        nav: "text-wh-100 hover:text-primary",
        icon: "bg-bl-100/65 hover:bg-primary rounded dark:bg-bl-100/65 dark:hover:bg-primary",
        cta: "bg-primary text-bl-100 justify-between rounded hover:bg-bl-60 hover:text-wh-100 duration-300",
        primary: "bg-primary justify-between rounded hover:bg-bl-60",
        contact:
          "bg-wh-80 text-bl-100 dark:bg-bl-60 dark:text-wh-100 rounded-md hover:bg-wh-90 dark:hover:bg-bl-70",
        social: "bg-bl-100 rounded-full text-wh-100 hover:bg-primary hover:text-bl-100"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        "icon-lg": "size-10",
        cta: "pl-4 pr-[5px] py-[5px] md:p-4",
        primary: "pl-6 pr-[5px] py-[5px]  w-full gap-6",
        contact: "p-6",
        social: "size-8"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "primary"
    }
  });

  export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
  export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
    };
</script>

<script lang="ts">
  let {
    class: className,
    variant = "primary",
    size = "primary",
    ref = $bindable(null),
    href = undefined,
    type = "button",
    disabled,
    children,
    ...restProps
  }: ButtonProps = $props();
</script>

{#if href}
  <a
    bind:this={ref}
    data-slot="button"
    class={cn(buttonVariants({ variant, size }), className)}
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    role={disabled ? "link" : undefined}
    tabindex={disabled ? -1 : undefined}
    {...restProps}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    data-slot="button"
    class={cn(buttonVariants({ variant, size }), className)}
    {type}
    {disabled}
    {...restProps}
  >
    {@render children?.()}
  </button>
{/if}
