<script lang="ts">
  import type { Project } from "$lib/types";
  import Wing from "$lib/Wing.svelte";
  import Wings from "$lib/Wings.svelte";

  export let data: { projects: Array<Project> };
  $: ({ projects } = data);
</script>

<svelte:head>
  <title>Anna Cingi | Set Designer</title>
</svelte:head>

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
