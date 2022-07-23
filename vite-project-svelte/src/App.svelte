<script lang="ts">
  import Button from "./components/Button.svelte";
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";

  let text = "";

  let notes: string[] = [];
</script>

<main class="max-w-lg m-auto">
  <div class="flex flex-col gap-y-2">
    <h3 class="text-2xl font-bold">Create a note</h3>
    <textarea
      bind:value={text}
      rows="12"
      class="w-full border focus:outline-sky-500 p-2"
    />

    <SvelteMarkdown source={text} />

    <div class="flex justify-end align-middle gap-x-2">
      <Button color="red" text="Cancel" />
      <Button
        color="sky"
        text="Create"
        on:click={() => {
          notes.push(text);
          text = "";
          console.log(notes);
        }}
      />
    </div>
  </div>
</main>
