<svelte:head>
  <title>Anna Cingi | Set Designer</title>
</svelte:head>

<div class="content">
  <section>
    <WingTitle title="Theatre" />
    <div class="wings">
    {#each theatreProjects as project, index}
      <Wing project={project} />
    {/each}
    </div>
  </section>

  <section>
    <WingTitle title="Opera" />
    <div class="wings">
      {#each operaProjects as project, index}
        <Wing project={project} />
      {/each}
    </div>
  </section>
</div>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch("index.json").then(res => res.json()).then(projects => ({ projects }));
  }
</script>

<script>
  import Wing from "../components/Wing.svelte";
  import WingTitle from "../components/WingTitle.svelte";

  export let projects;

  $: theatreProjects = projects.filter(project => project.group === "Theatre");

  $: operaProjects = projects.filter(project => project.group === "Opera");
</script>

<style>
  section:not(:first-child) {
    margin-top: 120px;
  }

  .wings {
    text-align: center;
  }

  @media (min-width: 860px) {
    .wings {
      text-align: left;
    }
  }
</style>
