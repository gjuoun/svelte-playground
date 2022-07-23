<script lang="ts">
  import Flex from "@components/Flex.svelte";
  import { editorState } from "../Editor/Editor.store";
  import TopButtonItem from "./TopButtonItem.svelte";
</script>

<Flex>
  <Flex>
    <TopButtonItem
      active={$editorState === "edit"}
      on:click={() => editorState.set("edit")}>Edit</TopButtonItem
    >
    <TopButtonItem
      active={$editorState === "preview"}
      on:click={() => editorState.set("preview")}>Preview</TopButtonItem
    >
  </Flex>
</Flex>

<style>
</style>
