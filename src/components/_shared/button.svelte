<script lang="ts">
    import { classes } from "../../data/helpers/css";
    import Icon from "./icon.svelte";

    export let size = undefined;
    export let className = undefined;

    export let disabled = undefined;

    export let rounded = undefined;
    export let icon : string | undefined = undefined;

    export let isActive = false;
</script>

<div
    on:click
    class={classes(
        className,
        " p-2 flex   rounded-md",
        "cursor-pointer",
        "shadow-md  transition-all  items-center transform ",

        !isActive && "bg-gray-600 text-white  ",
        isActive && " bg-gradient-to-t bg-primary text-black",
        rounded && "rounded-full",
        disabled && "opacity-50, pointer-events-none",
        size == "s" && "text-sm",
        size == "l" && "text-lg",
        size == "xl" && "text-xl",
        size == "xs" && "text-xs"
    )}
>
    {#if icon}
        <Icon className="mx-2" name={icon} />
    {/if}

    <slot />
</div>
