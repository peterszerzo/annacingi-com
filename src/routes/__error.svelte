<script context="module" lang="ts">
  export function load({ error, status }) {
    return {
      props: {
        status,
        error: error.message,
      },
    };
  }
</script>

<script lang="ts">
  import WingTitle2 from "$lib/WingTitle2.svelte";
  import Static from "$lib/Static.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<WingTitle2 title={error.message} tags={[]} />

{#if dev}
  <Static markdown={error || ""} />
{/if}

<style>
</style>
