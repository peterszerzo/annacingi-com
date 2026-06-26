<script lang="ts">
  import type { Credit } from "$lib/types";
  import { format } from "date-fns";
  import WingTitle from "$lib/WingTitle.svelte";

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM, yyyy");
  };

  interface Props {
    data: {
      credits: Array<Credit>;
    }
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Credits</title>
</svelte:head>

<WingTitle title="Credits" tags={[]} />

<div class="credits">
  {#each data.credits as credit}
    <div class="credit">
      <div class="credit-content">
        <p><strong>{credit.title}</strong></p>
        <p><span>{credit.role}</span></p>
        <p>{credit.description}</p>
      </div>
      {#if credit.openedAt}
        <p class="credit-right">{formatDate(credit.openedAt)}</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .credit-content > * {
    margin: 0;
  }

  .credit-content > * + * {
    margin-top: 12px;
  }

  .credit {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }

  .credit > * + * {
    margin-left: 30px;
  }

  .credit-right {
    margin: 0;
    white-space: pre;
    color: #676767;
  }

  p span {
    font-weight: 400;
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 2px 4px;
    line-height: 1;
  }

  .credits {
    margin-top: 100px;
  }

  .credits > * + * {
    margin-top: 40px;
  }
</style>
