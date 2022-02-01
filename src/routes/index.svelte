<script context="module" lang="ts">
  export async function load({ fetch }) {
    const fetched = await fetch("/index.data.json");
    const res = await fetched.json();
    return {
      props: {
        projects: res,
      },
    };
  }
</script>

<script lang="ts">
  import Wing from "$lib/Wing.svelte";
  import Wings from "$lib/Wings.svelte";
  import WingTitle from "$lib/WingTitle.svelte";

  export let projects = [];

  $: theatreProjects = projects.filter(
    (project) => project.group === "Theatre"
  );

  $: performanceProjects = projects.filter(
    (project) => project.group === "Performance"
  );

  $: operaProjects = projects.filter((project) => project.group === "Opera");
</script>

<svelte:head>
  <title>Anna Cingi | Set Designer</title>
</svelte:head>

<section>
  <WingTitle title="Theatre" />
  <Wings>
    {#each theatreProjects as project, index}
      <Wing {project} />
    {/each}
  </Wings>
</section>

<section>
  <WingTitle title="Performance" />
  <Wings>
    {#each performanceProjects as project, index}
      <Wing {project} />
    {/each}
  </Wings>
</section>

<section>
  <WingTitle title="Opera" />
  <Wings>
    {#each operaProjects as project, index}
      <Wing {project} />
    {/each}
  </Wings>
</section>

<div style="display:none" aria-hidden>
  <a href="/admin">Admin</a>
</div>

<style>
  section:not(:first-child) {
    margin-top: 120px;
  }
</style>
