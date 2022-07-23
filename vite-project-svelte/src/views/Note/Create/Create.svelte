<script lang="ts">
  import Flex from "@components/Flex.svelte";

  import Editor from "./Editor/Editor.svelte";
  import TopButtons from "./TopButtons/TopButtons.svelte";
</script>

<Flex class=" flex-col gap-y-2 ">
  <h3 class="text-2xl font-bold py-2">Create a note</h3>
  <TopButtons />
  <Editor />
</Flex>
