<script lang="ts">
  import { marked } from "marked";
  import { editorState, textState } from "./Editor.store";
  import { nanoid } from "nanoid";
  import Flex from "@components/Flex.svelte";
  import Button from "@components/Button.svelte";
  import { notesState } from "@views/Note/Note.store";
  let localText = "";

  textState.subscribe((text) => {
    localText = text;
  });

  $: preview = marked.parse(localText);
</script>

{#if $editorState === "edit"}
  <textarea
    bind:value={localText}
    on:blur={() => {
      textState.set(localText);
    }}
    rows="12"
    class="w-full border focus:outline-sky-500 p-2"
  />
  <Flex class="justify-end align-middle gap-x-2">
    <Button
      color="sky"
      on:click={() => {
        notesState.update((notes) => {
          return [
            ...notes,
            {
              title: "New note",
              text: $textState,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              id: nanoid(),
            },
          ];
        });
        textState.set("");
      }}>Create</Button
    >
  </Flex>
{:else}
  {@html preview}
{/if}
