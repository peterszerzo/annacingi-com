<svelte:head>
  <title>About Anna</title>
</svelte:head>

<WingTitle2 title="About Anna" />
<Static markdown={body} />

<script>
  import Static from "../components/Static.svelte";
  import WingTitle2 from "../components/WingTitle2.svelte";

  export let body;
</script>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch("about.data.json").then(res => res.json());
  }
</script>

<style>
  :global(.content) > :global(div:nth-child(2)) {
    margin-top: 80px;
  }
</style>
