<svelte:head>
  <title>Tag | {tagTitle}</title>
</svelte:head>

<WingTitle2 title={`Tag: ${tagTitle}`} tags={[]} />
<Wings>
  {#each projects as project, index}
    <Wing project={project} />
  {/each}
</Wings>

<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`tags/${params.slug}.data.json`);
    const projects = await res.json();

    if (res.status === 200) {
      return { tag: params.slug, projects };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { fromSlug } from "../../utils.js";
  import Wing from "../../components/Wing.svelte";
  import Wings from "../../components/Wings.svelte";
  import WingTitle2 from "../../components/WingTitle2.svelte";

  $ : tagTitle = fromSlug(tag);

  export let projects;
  export let tag;
</script>

<style>
</style>
