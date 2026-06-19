<script lang="ts">
  import { marked } from "marked";

  interface Props {
    markdown: string;
  }

  let { markdown }: Props = $props();
  
  let htmlContent = $derived(marked(markdown));
</script>

<div class="static">
  {@html htmlContent}
</div>

<style>
  .static {
    font-size: 18px;
    line-height: 1.5;
  }

  .static > :global(*) + :global(*) {
    margin-top: 20px;
  }

  .static :global(a) {
    color: inherit;
    transition: background-color 0.2s ease-in-out;
    border-radius: 4px;
  }

  .static :global(a:hover) {
    background-color: var(--color-accent);
  }

  .static :global(blockquote) {
    border-radius: 12px;
    background-color: var(--color-accent);
    padding: 8px 12px;
    margin-left: 0;
  }

  .static :global(blockquote) > :global(*) + :global(*) {
    margin-top: 20px;
  }
</style>
