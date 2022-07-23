<script lang="ts">
  export { sx as class };

  import clsx from "clsx";

  let sx = "";
  $: flexClass = clsx(["flex", sx]);
</script>

<div class={flexClass}>
  <slot />
</div>
