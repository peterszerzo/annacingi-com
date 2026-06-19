<script lang="ts">
  import type { Project } from "$lib/types";
  import Wing from "$lib/Wing.svelte";
  import Wings from "$lib/Wings.svelte";
  import WingTitle from "$lib/WingTitle.svelte";
  import { page } from "$app/state";

  interface Props {
    data: { projects: Array<Project> }
  }

  let { data }: Props = $props();

  let tagTitle = $derived(decodeURIComponent(page.params.slug));
</script>

<svelte:head>
  <title>{tagTitle}</title>
</svelte:head>

<WingTitle title={`Tag: ${tagTitle}`} tags={[]} />

<Wings>
  {#each data.projects as project, index (index)}
    <Wing {project} />
  {/each}
</Wings>

