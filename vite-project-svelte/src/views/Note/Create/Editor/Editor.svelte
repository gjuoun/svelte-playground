<script lang="ts">
  import { marked } from "marked";
  import { editorState, textState } from "./Editor.store";
  import { nanoid } from "nanoid";
  import Flex from "@components/Flex.svelte";
  import Button from "@components/Button.svelte";
  import { notesState } from "@views/Note/Note.store";
  import clsx from "clsx";
  let localText = "";

  textState.subscribe((text) => {
    localText = text;
  });

  $: preview = marked.parse(localText);

  const previewClass = clsx([
    "[&>h6]:text-sm [&>h6]:font-bold",
    "[&>h5]:text-base [&>h5]:font-bold",
    "[&>h4]:text-lg [&>h4]:font-bold",
    "[&>h3]:text-xl [&>h3]:font-bold",
    "[&>h2]:text-2xl [&>h2]:font-bold",
    "[&>h1]:text-3xl [&>h1]:font-bold",
  ]);
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
  <div id="editor-frame" class={previewClass}>
    {@html preview}
  </div>
{/if}
