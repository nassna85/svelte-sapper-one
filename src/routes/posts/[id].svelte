<script context="module">
  import getPost from "./[id].json";

  export function preload({ params, query }) {
    return getPost(params.id).then((postData) => {
      return { postData };
    });
  }
</script>

<script>
  export let postData;
</script>

<h1>{postData.title}</h1>

<p>{postData.body}</p>
