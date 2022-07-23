<script lang="ts">
  import Button from "./components/Button.svelte";
  import { onMount } from "svelte";
  import Layout from "./components/Layout/Layout.svelte";
  import Flex from "./components/Flex.svelte";
  import Editor from "./components/Editor/Editor.svelte";
  import { textState } from "./components/Editor/Editor.store";

  let notes: string[] = [];
</script>

<Layout>
  <Flex class=" flex-col gap-y-2 ">
    <h3 class="text-2xl font-bold py-2">Create a note</h3>


    <Editor />
    <Flex class="justify-end align-middle gap-x-2">
      <Button
        color="sky"
        on:click={() => {
          notes.push($textState);
          textState.set("");
        }}>Create</Button
      >
    </Flex>
  </Flex>
</Layout>
