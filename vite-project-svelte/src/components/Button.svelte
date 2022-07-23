<script lang="ts">
  import clsx from "clsx";

  type Color = "red" | "sky" | "white";
  export let color: Color = "sky";
  let colorClass = "";
  $: if (color === "sky") {
    colorClass = "bg-sky-500 active:bg-sky-700 text-white";
  } else if (color === "red") {
    colorClass = "bg-red-500 active:bg-red-700 text-white";
  } else {
    // white
    colorClass = "border active:bg-black active:text-white ";
  }

  $: buttonClass = clsx("px-4 py-2 rounded-lg", colorClass);
</script>

<button on:click class={buttonClass}>
  <slot />
</button>
