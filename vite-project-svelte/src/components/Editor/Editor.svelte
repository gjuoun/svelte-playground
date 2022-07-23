<script lang="ts">
  import { marked } from "marked";
  import { get } from "svelte/store";
  import { textState } from "./Editor.store";

  let localText = "";

  textState.subscribe((text) => {
    localText = text;
  });

  $: preview = marked.parse(localText);
</script>

<textarea
  bind:value={localText}
  on:blur={() => {
    textState.set(localText);
  }}
  rows="12"
  class="w-full border focus:outline-sky-500 p-2"
/>
<div>{preview}</div>
{@html preview}
