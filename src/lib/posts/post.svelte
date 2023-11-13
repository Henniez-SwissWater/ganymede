<script>
  export let title;
  export let date;
  date = new Date(date);
  const dateString =
    "" +
    date.getDate() +
    " " +
    date.toLocaleString("en", { month: "long" }) +
    " " +
    date.getFullYear();
</script>

<div id="post">
  <div id="header">
    <h2>{title}</h2>
    <span>Posted on <b>{dateString}</b></span>
  </div>
  <div id="postHTML">
    <slot />
  </div>
</div>

<style>
  #post {
    margin-bottom: 2em;
  }
  #header {
    margin-bottom: 0.8em;
  }
  #header > h2 {
    margin-bottom: 0.1em;
  }
  #header > span {
    font-size: 0.8em;
  }

  #postHTML :global(p) {
    padding-top: 0.25em;
    padding-bottom: 0.25em;
  }

  #postHTML :global(a) {
    font-weight: 500;
  }

  #postHTML :global(p#formula) {
    text-align: center;
    padding: 1em;
  }

  #postHTML :global(img){
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
  }

  #postHTML :global(code) {
    background-color: lightgray;
    font-family: "Courier New", Courier, monospace;
  }

  #postHTML :global(blockquote) {
    display: block;
    margin: 0.5em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    overflow-x: auto;
  }

  #postHTML :global(pre) {
    display: block;
    margin: 0.5em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    background-color: lightgray;
    font-family: "Courier New", Courier, monospace;
    overflow-x: auto;
  }
</style>
