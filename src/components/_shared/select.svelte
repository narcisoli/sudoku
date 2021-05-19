<script>
    export let options = [];
    export let display_func = a => a;
    export let index = 0;
    export let value;
  
    $: {
      value = options[index];
    }
  </script>
  
  <select class="p-2 rounded-lg" bind:value={index}>
    {#each options as option, i}
      <option value={i}>{display_func(option)}</option>
    {/each}
  </select>
  