<script>
  import marked from "marked";

  export let markdown;

  $: htmlContent = (marked || marked.marked)(markdown);
</script>

<div class="static">
  {@html htmlContent}
</div>

<style>
  .static {
    font-size: 16px;
    line-height: 1.5;
  }

  .static :global(a) {
    color: inherit;
  }

  .static :global(p) {
    margin-bottom: 16px;
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
