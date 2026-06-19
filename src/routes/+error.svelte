<script lang="ts">
  import { page } from "$app/state";
  import WingTitle from "$lib/WingTitle.svelte";
  import Static from "$lib/Static.svelte";
</script>

<svelte:head>
  <title>Something went wrong</title>
</svelte:head>

<WingTitle title="Could not design your page" tags={[]} />

<Static markdown={page.error?.message ?? "Something went wrong"} />
