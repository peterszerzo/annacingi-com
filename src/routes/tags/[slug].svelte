<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit/types/page";

  export async function load({ params, fetch }: LoadInput) {
    const fetched = await fetch(`/tags/${params.slug}.json`);
    const res = await fetched.json();
    return {
      props: {
        slug: params.slug,
        projects: res,
      },
    };
  }
</script>

<script lang="ts">
  import type { Project } from "$lib/types";
  import Wing from "$lib/Wing.svelte";
  import Wings from "$lib/Wings.svelte";
  import WingTitle2 from "$lib/WingTitle2.svelte";

  export let slug: string;
  export let projects: Array<Project> = [];

  $: tagTitle = `Tag: ${decodeURIComponent(slug)}`;
</script>

<svelte:head>
  <title>{tagTitle}</title>
</svelte:head>

<WingTitle2 title={tagTitle} />

<section>
  <Wings>
    {#each projects as project, index (index)}
      <Wing {project} />
    {/each}
  </Wings>
</section>

<style>
  section:not(:first-child) {
    margin-top: 120px;
  }
</style>
