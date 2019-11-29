<svelte:head>
  <title>{tag}</title>
</svelte:head>

<div class="content">
  <WingTitle2 title={tag} tags={[]} />
</div>

<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`tags/${params.slug}.data.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { tag: params.slug, projects: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import WingTitle2 from "../../components/WingTitle2.svelte";

  export let tag;
</script>

<style>
</style>
