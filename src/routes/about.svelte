<svelte:head>
  <title>About Anna</title>
</svelte:head>

<div class="image-container stickout">
  <div class="image-crop-container">
    <img src={portraitUrl} alt="Anna Portrait" />
  </div>
</div>
<Static markdown={body} />

<script>
  import Static from "../components/Static.svelte";
  import WingTitle2 from "../components/WingTitle2.svelte";

  export let body;
  export let portraitUrl;
</script>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch("about.data.json").then(res => res.json());
  }
</script>

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
