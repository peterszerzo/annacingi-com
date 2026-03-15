<script lang="ts">
  import type { Project } from "$lib/types";
  import Wing from "$lib/Wing.svelte";
  import Wings from "$lib/Wings.svelte";
  import WingTitle2 from "$lib/WingTitle2.svelte";
  import { page } from "$app/stores";

  export let data: { projects: Array<Project> };
  $: ({ projects } = data);
  $: slug = $page.params.slug;
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
