<script lang="ts">
    import { onMount } from "svelte/internal";

    import { classes } from "../../data/helpers/css";

    export let className = "";
    export let placeholder = "";
    export let value = "";
    export let type = "text";
    export let textArea = false;

    export let error = false;
    let inputElement;
    onMount(() => {
        if (inputElement) inputElement.type = type;
    });
</script>

<!-- {type} -->
{#if textArea}
    <textarea
        {placeholder}
        class={classes(
            "  p-1 w-full h-32 outline-none inline-block border border-solid rounded-md box-border ",
            className,
            error && "border-red-500"
        )}
        bind:value
    />
{:else}
    <input
        {placeholder}
        bind:this={inputElement}
        class={classes(
            "  p-1 outline-none inline-block border border-solid rounded-md box-border ",
            className,
            error && "border-red-500"
        )}
        bind:value
    />
{/if}
