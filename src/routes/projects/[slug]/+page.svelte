<script lang="ts">
  import type { Project } from "$lib/types";
  import Carousel from "$lib/Carousel.svelte";
  import Static from "$lib/Static.svelte";
  import WingTitle from "$lib/WingTitle.svelte";

  export let data: Project;
  $: project = data;
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

{#if project.imgs}
  <Carousel carouselId="car1" images={project.imgs} />
{/if}

<WingTitle title={project.title} tags={project.tags} />

<Static markdown={project.body} />
