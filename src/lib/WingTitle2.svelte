<script lang="ts">
  import Tag from "./Tag.svelte";

  export const tagUrl = (tag: string) => {
    return tag && tag.replace && tag.replace(/\ /g, "--");
  };

  export let title: string;
  export let tags: Array<string> | undefined = undefined;
</script>

<div class="wing-title2">
  <h1 class="title stickout">{title}</h1>
  {#if tags}
    <div class="tags">
      {#each tags as tag}
        <Tag {tag} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .wing-title2 {
    color: #000;
    background-color: #fff;
    width: -moz-fit-content;
    width: fit-content;
    transform: skewY(-14deg);
    text-align: center;
    margin: 20px auto 40px;
  }

  h1 {
    width: -moz-fit-content;
    width: fit-content;
    margin: auto;
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
