<script lang="ts">
  import type { Project } from "$lib/types";
  import Carousel from "$lib/Carousel.svelte";
  import Static from "$lib/Static.svelte";
  import WingTitle from "$lib/WingTitle.svelte";

  interface Props {
    data: Project;
  }

  let { data: project }: Props = $props();
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

{#if project.imgs}
  <Carousel images={project.imgs} />
{/if}

<WingTitle title={project.title} tags={project.tags} />

<Static markdown={project.body} />
