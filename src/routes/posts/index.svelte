<script context="module">
  import posts from "./index.json";

  export function preload({ params, query }) {
    console.log("preload...");
    return posts.then((postsData) => {
      return { postsData };
    });
  }
</script>

<script>
  console.log("script run");
  export let postsData;
</script>

{#if postsData.length === 0}
  <p>Loading...</p>
{:else}
  {#each postsData as post}
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <a href={'/posts/' + post.id}>Voir ce post</a>
  {/each}
{/if}
