<script context="module">
  export function preload({ params, query }) {
    return this.fetch("index.data.json").then((res) => res.json());
  }
</script>

<script>
  import Wing from "../components/Wing.svelte";
  import Wings from "../components/Wings.svelte";
  import WingTitle from "../components/WingTitle.svelte";

  export let projects;

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
