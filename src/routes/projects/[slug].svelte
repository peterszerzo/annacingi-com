<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit/types/page";

  export async function load({ params, fetch }: LoadInput) {
    const res = await fetch(`/projects/${params.slug}.json`);
    const data = await res.json();

    return { props: { project: data } };
  }
</script>

<script lang="ts">
  import type { Project } from "$lib/types";
  import Carousel from "$lib/Carousel.svelte";
  import Static from "$lib/Static.svelte";
  import WingTitle2 from "$lib/WingTitle2.svelte";

  export let project: Project;
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<WingTitle2 title={project.title} tags={project.tags} />
{#if project.imgs}
  <Carousel carouselId="car1" images={project.imgs} />
{/if}
<Static markdown={project.body} />

<style>
</style>
