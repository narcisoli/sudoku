<script lang="ts">
    import { classes } from "../../data/helpers/css";

    export let className = "";
    export let name: string;
</script>

<svg class={classes(className, "h-5 w-5")}>
    <use xlink:href={`#${name}`} />
</svg>
