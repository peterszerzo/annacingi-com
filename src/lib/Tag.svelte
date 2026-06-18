<script lang="ts">
  export let tag: string;
  export let withLink: boolean = false;
</script>

{#if withLink}
  <a href={`/tags/${encodeURIComponent(tag)}`} class="tag">{tag}</a>
{:else}
  <span class="tag">{tag}</span>
{/if}

<style>
  .tag {
    padding: 2px 4px;
    display: inline-block;
    background-color: var(--color-accent);
    color: #232323;
    word-break: none;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
  }
</style>
