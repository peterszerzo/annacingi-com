<script lang="ts">
  export let tag: string;
  export let dark: boolean | undefined = undefined;
  export let withLink: boolean = false;

  $: highlighted = tag === "set designer" || tag === "costume designer";
</script>

{#if withLink}
  <a href={`/tags/${encodeURIComponent(tag)}`} class="tag" class:highlighted-tag={highlighted} class:dark-tag={dark}>{tag}</a>
{:else}
  <span class="tag" class:highlighted-tag={highlighted} class:dark-tag={dark}>{tag}</span>
{/if}

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

  .highlighted-tag {
    background-color: #e0ff0c;
    color: #232323;
  }

  .dark-tag {
    background-color: #000;
    color: #fff;
  }
</style>
