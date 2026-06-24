<script lang="ts">
  interface Props {
    tag: string;
    withLink?: boolean;
    large?: boolean;
  }

  let { tag, withLink = false, large = false }: Props = $props();
</script>

{#if withLink}
  <a href={`/tags/${encodeURIComponent(tag)}`} class="tag" class:tag--large={large}>{tag}</a>
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
    border: 1px solid transparent;
    transition: border-color 0.2s ease-in-out;
  }

  .tag--large {
    font-size: 16px;
  }

  a:hover {
    border: 1px solid var(--color-primary-900);
  }
</style>
