<script lang="ts">
  import { marked } from "marked";

  // There have historically been issues with the marked package exports, therefore we
  // default to the identity function.
  const m = typeof marked === "function" ? marked : (a: string) => a;

  export let markdown = "";

  $: htmlContent = m(markdown);
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
