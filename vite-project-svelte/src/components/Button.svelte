<script lang="ts">
  import clsx from "clsx";
  type Color = "red" | "sky" | "white" | "yellow";

  export let color: Color = "sky";

  const colorMap: Record<Color, string> = {
    red: "bg-red-500 active:bg-red-700 text-white",
    yellow: "bg-yellow-500 active:bg-yellow-700 text-white",
    sky: "bg-sky-500 active:bg-sky-700 text-white",
    white: "border active:bg-black active:text-white ",
  };

  $: buttonClass = clsx("px-4 py-2 rounded-lg", colorMap[color]);
</script>

<button on:click class={buttonClass}>
  <slot />
</button>
