<script lang="ts">
  import clsx from "clsx";

  type Color = "red" | "sky";
  export let color: Color = "sky";
  let colorClass = "";
  $: if (color === "sky") {
    colorClass = "bg-sky-500 active:bg-sky-700";
  } else {
    colorClass = "bg-red-500 active:bg-red-700";
  }

  $: buttonClass = clsx("px-4 py-2 rounded-lg", colorClass, "text-white");
  export let text: string;
</script>

<button on:click class={buttonClass}>{text}</button>
