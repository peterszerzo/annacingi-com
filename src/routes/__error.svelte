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

  export let status: number;
  export let error: string;
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<WingTitle2 title="Something Went Wrong" tags={[]} />

<Static markdown={error || ""} />

<style>
</style>
