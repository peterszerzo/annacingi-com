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

  .static :global(a) {
    color: inherit;
  }

  .static :global(p) {
    margin-top: 0;
    margin-bottom: 18px;
  }

  .static :global(blockquote) {
    border-left: 3px solid #dedede;
    color: #676767;
    font-style: italic;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    margin-left: 0;
  }
</style>
