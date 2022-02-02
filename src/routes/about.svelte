<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit/types/page";

  export async function load({ fetch }: LoadInput) {
    const fetched = await fetch("/about.json");
    const res = await fetched.json();

    return {
      props: res,
    };
  }
</script>

<script lang="ts">
  import Static from "$lib/Static.svelte";

  export let body: string;
  export let portraitUrl: string;
</script>

<svelte:head>
  <title>About Anna</title>
</svelte:head>

<div class="image-container stickout">
  <div class="image-crop-container">
    <img src={portraitUrl} alt="Anna Portrait" />
  </div>
</div>
<Static markdown={body} />

<style>
  :global(.content) > :global(div:nth-child(2)) {
    margin-top: 80px;
  }

  .image-container {
    position: relative;
    width: fit-content;
    margin: 20px auto 0px;
    transform: skewY(-14deg);
    width: 240px;
    height: 240px;
    margin: 40px auto 50px;
  }

  .image-crop-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  img {
    position: relative;
    transform: skewY(+14deg);
    width: 310px;
    top: -35px;
    left: -35px;
  }

  @media screen and (min-width: 640px) {
    .image-container {
      width: 300px;
      height: 300px;
      margin: 40px auto 60px;
    }

    img {
      width: 380px;
      top: -40px;
      left: -40px;
    }
  }
</style>
