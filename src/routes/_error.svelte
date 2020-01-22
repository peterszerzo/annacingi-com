<svelte:head>
  <title>{status}</title>
</svelte:head>

<WingTitle2 title="{error.message}" tags={[]} />

{#if dev}
<Static markdown={error.stack || ""} />
{/if}

<script>
  import WingTitle2 from "../components/WingTitle2.svelte";
  import Static from "../components/Static.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>
