<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit/types/page";

  export async function load({ fetch }: LoadInput) {
    const fetched = await fetch("/index.json");
    const res = await fetched.json();
    return {
      props: {
        projects: res,
      },
    };
  }
</script>

<script lang="ts">
  import type { Project } from "$lib/types";
  import Wing from "$lib/Wing.svelte";
  import Wings from "$lib/Wings.svelte";

  export let projects: Array<Project> = [];
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
