<script lang="ts">
  import type { Project } from "$lib/types";
  import Wing from "$lib/Wing.svelte";
  import Wings from "$lib/Wings.svelte";

  interface Props {
    data: {
      projects: Array<Project>;
    } 
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Anna Cingi | Set Designer</title>
</svelte:head>

<Wings>
  {#each data.projects as project, index (index)}
    <Wing {project} />
  {/each}
</Wings>

