{#if href}
  <a href="{href}" class="tag">{tag}</a>
{:else}
  <span class="tag">{tag}</span>
{/if}

<script>
  export let tag;
  export let href;
</script>

<style>
  .tag {
    padding: 2px 6px;
    display: inline-block;
    background-color: #efefef;
    color: #545454;
    word-break: none;
    width: fit-content;
    border-radius: 2px;
    font-size: 12px;
    text-decoration: none;
  }
</style>
