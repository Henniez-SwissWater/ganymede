<script>
  import {
    contextMenuLinks,
    contextMenuTitle,
    contexMenuSelection
  } from "../stores/contextMenuStore";
  import { getTags, getPagePosts, getPageCount } from "./postsAPI";
  import Post from "./post.svelte";

  let pageCurrent = 0;
  let tagCurrent = "all";
  let path = document.location.pathname.split("/");
  if (path[1] == "posts" && path.length == 4) {
    tagCurrent = path[2];
    pageCurrent = parseInt(path[3]);
  }

  let posts = [];
  getPagePosts(pageCurrent, tagCurrent).then((newPosts) => (posts = newPosts));

  let pageCount = 1;
  getPageCount(tagCurrent).then((count) => (pageCount = count));

  contextMenuTitle.set("Post Tags");
  contexMenuSelection.set(tagCurrent);
  contextMenuLinks.set([]);
  getTags().then((a) =>
    a.forEach((element) => {
      contextMenuLinks.update((list) => [
        ...list,
        { label: element, link: "/posts/" + element + "/0" },
      ]);
      contextMenuTitle.set("Post Tags");
    })
  );
</script>

<div>
  {#each posts as { title, html, date }, i}
    <Post {title} {date}>
      {@html html}
    </Post>
  {/each}
  <div id="backForward">
    {#if pageCount > 1}
      {#if pageCurrent < pageCount - 1}
        <a href="/posts/{tagCurrent}/{pageCurrent + 1}">&lt&lt Older posts</a>
      {:else}
      <div/>
      {/if}
      {#if pageCurrent > 0}
        <a href="/posts/{tagCurrent}/{pageCurrent - 1}">Newer posts &gt &gt </a>
      {/if}
    {/if}
  </div>
</div>

<style>
  #backForward {
    display: flex;
    justify-content: space-between;
  }
</style>
