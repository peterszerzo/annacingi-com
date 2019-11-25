<div class="carousel-container stickout">
  {#if images[carouselPage] && images[carouselPage].credit}
    <div class="carousel-credit">Credit: {images[carouselPage].credit}</div>
  {/if}
  <div class="carousel-controls">
    {#each imageIndices as image, index}
      <button class="carousel-button" class:selected={index === carouselPage} on:click={() => {
        carouselPage = index;
      }}></button>
    {/each}
  </div>
  <button class="carousel-side carousel-side-left" on:click={prev}>
    <Chevron dir="left" />
  </button>
  <button class="carousel-side carousel-side-right" on:click={next}>
    <Chevron dir="right" />
  </button>
  <div class="carousel" id={carouselId}>
    {#each images as image}
      <div class="carousel-slide" style="background-image: url({image.url});">
      </div>
    {/each}
  </div>
</div>

<script>
  import Siema from "siema";
  import Chevron from "./icons/Chevron.svelte";
  import { onMount, onDestroy } from "svelte";

  export let carouselId;

  export let images;

  $: imageIndices = images.map((_image, index) => index);

  let siema;

  let carouselPage = 0;

  $: siema && siema.goTo(carouselPage);

  const next = () => {
    carouselPage = carouselPage === images.length - 1 ? 0 : carouselPage + 1;
  }

  const prev = () => {
    carouselPage = carouselPage === 0 ? images.length - 1 : carouselPage - 1;
  }

  const handleKeyPress = ev => {
    if (ev.key === "ArrowRight") {
      next();
      return;
    }
    if (ev.key === "ArrowLeft") {
      prev();
      return;
    }
  }

  onMount(() => {
    if (images.length === 0) {
      return;
    }
    try {
      document.addEventListener("keydown", handleKeyPress);
    } catch(err) {}
    siema = new Siema({
      selector: `#${carouselId}`,
      loop: true,
      onChange: newPage => {
        carouselPage = siema.currentSlide;
      }
    });
  });

  onDestroy(() => {
    if (images.length === 0) {
      return;
    }
    // For some reason, this code runs on the server and throws an error
    try {
      document.removeEventListener("keydown", handleKeyPress);
    } catch(err) {}
    siema && siema.destroy();
  });
</script>

<style>
  .carousel-container,
  .carousel-slide {
    width: 100%;
    height: 280px;
  }

  @media (min-width: 860px) {
    .carousel-container {
      left: 0;
    }

    .carousel-container,
    .carousel-slide {
      width: 840px;
      height: 480px;
    }
  }

  .carousel-container {
    background-color: #000;
    position: relative;
    margin: 20px auto;
  }

  .carousel-slide {
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .carousel-controls {
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 10px;
    z-index: 1000;
    transform: translate3d(-50%, 0, 0);
  }

  .carousel-button {
    display: block;
    margin: 0 6px;
    padding: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #CCC;
    border: 0;
    cursor: pointer;
  }

  .carousel-button:hover {
    filter: brightness(80%);
  }

  .selected {
    background-color: #F7CE00;
  }

  .carousel-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
  }

  .carousel-credit {
    position: absolute;
    width: fit-content;
    top: 10px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 2px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.8);
    color: #FFF;
    text-align: center;
    z-index: 1000;
  }

  .carousel-side {
    position: absolute;
    top: calc(50% - 25px);
    width: 20px;
    height: 50px;
    color: #FFF;
    z-index: 1000;
    opacity: 0.6;
    cursor: pointer;
    background: none;
    border: 0;
    margin: 0;
    padding: 0;
    display: block;
  }

  .carousel-side:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .carousel-side:hover {
    opacity: 1;
  }

  .carousel-side-left {
    left: 15px;
  }

  .carousel-side-right {
    right: 15px;
  }
</style>
