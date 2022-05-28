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

<div class="about-container">
  <div class="image-container">
    <div class="image-frames">
      <div class="image-frame stickout background2" />
      <div class="image-frame stickout background" />
      <div class="image-frame stickout">
        <div class="image-crop-container">
          <img src={portraitUrl} alt="Anna Portrait" />
        </div>
      </div>
    </div>
  </div>
  <Static markdown={body} />
</div>

<style>
  .image-container {
    position: relative;
    margin: 40px auto 100px;
  }

  @media screen and (min-width: 860px) {
    .about-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .image-container {
      margin: 60px auto 0;
    }
  }

  .image-frames {
    position: relative;
    width: 240px;
    height: 240px;
    margin: auto;
  }

  .image-frame {
    width: 240px;
    height: 240px;
    position: relative;
    transform: skewY(-14deg);
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

  .background {
    background-color: #e0ff0c;
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .background2 {
    background-color: #000;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  @media screen and (min-width: 640px) {
    .image-frame {
      width: 300px;
      height: 300px;
    }

    .image-frames {
      width: 300px;
      height: 300px;
    }

    img {
      width: 380px;
      top: -40px;
      left: -40px;
    }
  }
</style>
