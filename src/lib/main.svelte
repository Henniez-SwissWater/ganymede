<script>
  import Kiswahili from "./kiswahili/kiswahili.svelte";
  import Posts from "./posts/posts.svelte";
  import Publications from "./publications/publications.svelte";
  import About from "./about.svelte";

  let path = window.location.pathname.split("/");
  let base = path[1] == "" ? "posts" : path[1];
</script>

<main>
  {#if base == "posts"}
    <Posts />
  {:else if base == "publications"}
    <Publications />
  {:else if base == "kiswahili"}
    <Kiswahili />
  {:else if base == "about"}
    <About />
  {/if}
</main>

<style>
  main {
    padding-top: 7em;
    background-color: rgba(255, 255, 255, 0.75);
  }
</style>
