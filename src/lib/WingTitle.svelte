<script lang="ts">
  import Tag from "./Tag.svelte";

  export const tagUrl = (tag: string) => {
    return tag && tag.replace && tag.replace(/\ /g, "--");
  };

  export let title: string;
  export let tags: Array<string>;
</script>

<div class="wing-title">
  <h1 class="title font-geom stickout">{title}</h1>
  {#if tags.length > 0}
    <div class="tags">
      {#each tags as tag}
        <Tag {tag} withLink />
      {/each}
    </div>
  {/if}
</div>

<style>
  .wing-title {
    color: var(--color-primary-900);
    background-color: #fff;
    width: -moz-fit-content;
    width: fit-content;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    width: -moz-fit-content;
    width: fit-content;
    margin: auto !important;
    padding: 4px 10px;
  }

  .tags {
    text-align: center;
    padding: 20px;
  }

  .tags > :global(*) {
    margin: 4px;
  }
</style>
