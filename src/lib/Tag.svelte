<script lang="ts">
  export let tag: string;
  export let dark: boolean | undefined = undefined;
  export let withLink: boolean = false;

  $: highlighted = false;
</script>

{#if withLink}
  <a
    href={`/tags/${encodeURIComponent(tag)}`}
    class="tag"
    class:highlighted-tag={highlighted}
    class:dark-tag={dark}>{tag}</a
  >
{:else}
  <span class="tag" class:highlighted-tag={highlighted} class:dark-tag={dark}
    >{tag}</span
  >
{/if}

<style>
  .tag {
    padding: 0px 4px;
    display: inline-block;
    background-color: var(--color-accent);
    color: #232323;
    word-break: none;
    width: fit-content;
    border-radius: 4px;
    font-size: 14px;
    text-decoration: none;
  }

  .highlighted-tag {
  }

  .dark-tag {
    background-color: #000;
    color: #fff;
  }
</style>
