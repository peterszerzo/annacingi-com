<svelte:head>
  <title>Anna Cingi | Set Designer</title>
</svelte:head>

<section>
  <WingTitle title="Theatre" />
  <Wings>
    {#each theatreProjects as project, index}
      <Wing project={project} />
    {/each}
  </Wings>
</section>

<section>
  <WingTitle title="Opera" />
  <Wings>
    {#each operaProjects as project, index}
      <Wing project={project} />
    {/each}
  </Wings>
</section>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch("index.json").then(res => res.json()).then(projects => ({ projects }));
  }
</script>

<script>
  import Wing from "../components/Wing.svelte";
  import Wings from "../components/Wings.svelte";
  import WingTitle from "../components/WingTitle.svelte";

  export let projects;

  $: theatreProjects = projects.filter(project => project.group === "Theatre");

  $: operaProjects = projects.filter(project => project.group === "Opera");
</script>

<style>
  section:not(:first-child) {
    margin-top: 120px;
  }
</style>
