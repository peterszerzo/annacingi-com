<div class="wing-title2">
  <h1 class="title stickout">{title}</h1>
  {#if tags}
    <div class="tags">
      {#each tags as tag}
        <Tag
          tag={tag}
          href="{`/tags/${tagUrl(tag)}`}"
        />
      {/each}
    </div>
  {/if}
</div>

<script>
  import Tag from "./Tag.svelte";

  export const tagUrl = tag => {
    return tag && tag.replace && tag.replace(/\ /g, "--");
  }

  export let title;
  export let tags;
</script>

<style>
  .wing-title2 {
    color: #000;
    background-color: #FFF;
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
