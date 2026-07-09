<script lang="ts">
  import Chevron from "./icons/Chevron.svelte";

  interface Image {
    url: string;
    credit?: string;
  }

  let { images }: { images: Image[] } = $props();

  let carouselPage = $state(0);

  const next = () => {
    carouselPage = carouselPage === images.length - 1 ? 0 : carouselPage + 1;
  };

  const prev = () => {
    carouselPage = carouselPage === 0 ? images.length - 1 : carouselPage - 1;
  };

  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "ArrowRight" && !ev.metaKey && !ev.ctrlKey) next();
    else if (ev.key === "ArrowLeft" && !ev.metaKey && !ev.ctrlKey) prev();
  };

  let dragOffset = $state(0);
  let isDragging = $state(false);
  let dragStartX: number | null = null;

  const startDrag = (startX: number) => {
    dragStartX = startX;
    isDragging = true;
  };

  const moveDrag = (currentX: number) => {
    if (dragStartX === null) return;
    dragOffset = currentX - dragStartX;
  };

  const endDrag = (currentX: number) => {
    if (dragStartX === null) return;
    const dx = currentX - dragStartX;
    dragStartX = null;
    isDragging = false;
    dragOffset = 0;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };

  const cancelDrag = () => {
    dragStartX = null;
    isDragging = false;
    dragOffset = 0;
  };

  const handleMouseMove = (ev: MouseEvent) => moveDrag(ev.clientX);
  const handleMouseUp = (ev: MouseEvent) => endDrag(ev.clientX);
  const handleMouseDown = (ev: MouseEvent) => startDrag(ev.clientX);

  const handleTouchStart = (ev: TouchEvent) => startDrag(ev.touches[0].clientX);
  const handleTouchMove = (ev: TouchEvent) => moveDrag(ev.touches[0].clientX);
  const handleTouchEnd = (ev: TouchEvent) => endDrag(ev.changedTouches[0].clientX);
</script>

<svelte:document onkeydown={handleKeyDown} onmousemove={handleMouseMove} onmouseup={handleMouseUp} />

{#if images && images.length > 0}
  <div class="carousel-container stickout">
    {#if images[carouselPage]?.credit}
      <div class="carousel-credit">Credit: {images[carouselPage].credit}</div>
    {/if}
    <div class="carousel-controls">
      {#each images as _, index}
        <button
          class="carousel-button"
          class:selected={index === carouselPage}
          title={`View image ${index + 1}`}
          onclick={() => { carouselPage = index; }}
        ></button>
      {/each}
    </div>
    <button title="Previous image" class="carousel-side carousel-side-left" onclick={prev}>
      <Chevron dir="left" />
    </button>
    <button title="Next image" class="carousel-side carousel-side-right" onclick={next}>
      <Chevron dir="right" />
    </button>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="carousel" class:dragging={isDragging} ontouchstart={handleTouchStart} ontouchmove={handleTouchMove} ontouchend={handleTouchEnd} ontouchcancel={cancelDrag} onmousedown={handleMouseDown}>
      <div class="carousel-track" style="transform: translateX(calc({-carouselPage * 100}% + {dragOffset}px)); transition: {isDragging ? 'none' : 'transform 0.3s ease'}">
        {#each images as image}
          <div
            class="carousel-slide"
            style="background-image: url({image.url});"
          ></div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .carousel-container,
  .carousel-slide {
    height: 320px;
  }

  @media (min-width: 600px) {
    .carousel-container,
    .carousel-slide {
      height: 480px;
    }
  }

  @media (min-width: 860px) {
    .carousel-container,
    .carousel-slide {
      height: 540px;
    }
  }

  .carousel-container {
    background-color: #000;
    position: relative;
  }

  .carousel {
    overflow: hidden;
    height: 100%;
    cursor: grab;
  }

  .carousel.dragging {
    cursor: grabbing;
    user-select: none;
  }

  .carousel-track {
    display: flex;
    height: 100%;
  }

  .carousel-slide {
    flex: 0 0 100%;
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
    padding: 0;
    border-radius: 50%;
    background-color: #ccc;
    border: 0;
    width: 6px;
    height: 6px;
    margin: 0 3px;
    cursor: pointer;
  }

  @media (min-width: 860px) {
    .carousel-button {
      width: 12px;
      height: 12px;
      margin: 0 6px;
    }
  }

  .carousel-button:hover {
    background-color: var(--color-accent);
  }

  .selected {
    background-color: var(--color-accent);
  }

  .carousel-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
  }

  .carousel-credit {
    position: absolute;
    width: fit-content;
    max-width: 120px;
    bottom: 6px;
    right: 6px;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 2px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    z-index: 1000;
  }

  .carousel-side {
    position: absolute;
    top: calc(50% - 25px);
    width: 20px;
    height: 50px;
    color: #fff;
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
