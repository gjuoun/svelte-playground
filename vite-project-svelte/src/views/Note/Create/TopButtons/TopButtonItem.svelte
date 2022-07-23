<script lang="ts">
  export { sx as class, active };

  import clsx from "clsx";

  let sx = "";
  let active: boolean;
  $: flexClass = clsx([
    "text-sm px-2 py-1 min-w-[120px] ",
    active && "bg-sky-500 text-white border-sky-200",
    sx,
    // common
    "border-t border-b",
    // firstchild
    "first:border-l ",
    "first:rounded-tl-md first:rounded-bl-md ",
    // // non first child,
    "[&:not(:first-child)]:border-l",
    "last:rounded-tr-md last:rounded-br-md",
    "last:border-r",
  ]);
</script>

<button on:click class={flexClass}>
  <slot />
</button>

<style>
  /* .button-group-item:not(:first-child) {
    border-left: 1px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }
  .button-group-item:first-child {
    border-left: 1px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .button-group-item:last-child {
    border-right: 1px solid;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  } */
</style>
