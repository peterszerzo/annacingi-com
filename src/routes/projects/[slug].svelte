<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<div class="content">
  <WingTitle2 title={project.title} tags={project.tags} />
  <Carousel carouselId="car1" images={project.imgs} />
  <Static markdown={project.content} />
</div>

<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`projects/${params.slug}.data.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Carousel from "../../components/Carousel.svelte";
  import Static from "../../components/Static.svelte";
  import WingTitle2 from "../../components/WingTitle2.svelte";

  export let project;
</script>

<style>
</style>
