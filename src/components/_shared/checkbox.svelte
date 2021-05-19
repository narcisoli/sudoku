<script lang="ts">
    export let label;
    export let checked;
</script>

<div class="flex">
    {#if label}
        <div class="mr-2">{label}</div>
    {/if}
    <input type="checkbox" bind:checked />
</div>
