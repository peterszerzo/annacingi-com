<script context="module" lang="ts">
  export function load({ url, error, status }) {
    return {
      props: {
        pathname: url.pathname,
        status,
        error: error.message,
      },
    };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import WingTitle from "$lib/WingTitle.svelte";
  import Static from "$lib/Static.svelte";

  export let status: number;
  export let error: string;
  export let pathname: string;

  $: isPdf = (pathname ?? "").includes(".pdf");

  onMount(() => {
    isPdf && window.location.reload();
  });
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

{#if !isPdf}
  <WingTitle title="Something Went Wrong" />

  <Static markdown={error || ""} />
{/if}
