<script context="module" lang="ts">
  export async function load({ params, fetch }) {
    const fetched = await fetch(`/tags/${params.slug}.data.json`);
    const res = await fetched.json();

    return { props: { tag: params.slug, projects: res.projects } };
  }
</script>

<script lang="ts">
  import { fromSlug } from "../../utils";
  import Wing from "$lib/Wing.svelte";
  import Wings from "$lib/Wings.svelte";
  import WingTitle2 from "$lib/WingTitle2.svelte";

  $: tagTitle = fromSlug(tag);

  export let projects;
  export let tag;
</script>

<svelte:head>
  <title>Tag | {tagTitle}</title>
</svelte:head>

<WingTitle2 title={`Tag: ${tagTitle}`} tags={[]} />
<Wings>
  {#each projects as project, index}
    <Wing {project} />
  {/each}
</Wings>

<style>
</style>
