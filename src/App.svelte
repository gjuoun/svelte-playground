<script>
  import Demo from "./demo.svelte";
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<h1>Hello {name}!</h1>
<Demo />

<button on:click={handleClick}>
  Clicked {count} times
</button>

<style>
  h1 {
    color: green;
  }
</style>
