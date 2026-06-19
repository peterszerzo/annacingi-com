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
  import { page } from "$app/state";
  import WingTitle from "$lib/WingTitle.svelte";
  import Static from "$lib/Static.svelte";
</script>

<svelte:head>
  <title>Something went wrong</title>
</svelte:head>

<WingTitle title="Something went wrong" tags={[]} />

<Static markdown={page.error.message} />
