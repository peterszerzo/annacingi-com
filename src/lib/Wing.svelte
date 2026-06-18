<script lang="ts">
  import type { Project } from "$lib/types";
  import Tag from "./Tag.svelte";

  export let project: Project;

  $: openingYear = new Date(project.openedAt).getFullYear();
  $: openingMonth = new Date(project.openedAt).getMonth() + 1;

  const range = (n: number) => [...Array(n).keys()];

  const range2 = (n: number) => (m: number) =>
    range(n)
      .map((i) => range(m).map((j) => [i, j]))
      .reduce((accumulator, current) => [...accumulator, ...current], []);

  let grid = range2(8)(4);

  $: longestWord = Math.max(
    ...project.title.split(" ").map((str) => str.length)
  );
</script>

<a href="/projects/{project.id}" class="wing">
  <div class="wing-side stickout">
    <div>
      <h3 class="title font-geom" class:breakAll={longestWord > 12}>{project.title}</h3>
      {#if project.tags.length > 0}
        {#each project.tags as tag}
          <div>
            <Tag {tag} />
          </div>
        {/each}
      {/if}
    </div>
    <p class="date font-geom">{openingMonth} / {openingYear}</p>
  </div>
  {#if project.thumbnailImg}
    <div
      class="wing-side stickout"
      style="background-image: url({project.thumbnailImg})"
    ></div>
    <img
      class="load-test"
      src={project.thumbnailImg}
      alt="Loading image"
      aria-hidden="true"
    />
  {:else}
    <div class="wing-side stickout" style="background: #454545;">
      {#each grid as gridItem, index}
        <div
          class="wing-pattern"
          style="transform: rotate({(index % 4) * 90}deg); top: {-10 +
            gridItem[0] * 40}px; left: {-10 +
            gridItem[1] * 40 +
            (gridItem[0] % 2 === 0 ? 20 : 0)}px;"
        >
          <svg viewBox="0 0 1000 1000">
            <use xlink:href="#logo" />
          </svg>
        </div>
      {/each}
    </div>
  {/if}
</a>

<style>
  .wing {
    display: inline-flex;
    text-decoration: none;
    text-align: left;
    color: var(--color-primary-900);
    padding-top: 18px;
    padding-bottom: 18px;
    margin-left: -1px;
    margin-bottom: 0px;
  }

  .load-test {
    width: 1px;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .wing:focus { outline: none; }

  .wing:hover :global(.stickout::before),
  .wing:hover :global(.stickout::after),
  .wing:focus :global(.stickout::before),
  .wing:focus :global(.stickout::after) {
    border-color: #000;
  }

  .wing-side {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 150px;
    height: 280px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    position: relative;
  }

  .wing-side:nth-child(2) {
    margin-left: -1px;
  }

  .wing:nth-child(2n + 0) .wing-side:nth-child(1) {
    transform: skewY(14deg);
  }

  .wing:nth-child(2n + 1) .wing-side:nth-child(1) {
    transform: skewY(-14deg);
  }

  .wing:nth-child(2n + 0) .wing-side:nth-child(2) {
    transform: skewY(-14deg);
  }

  .wing:nth-child(2n + 1) .wing-side:nth-child(2) {
    transform: skewY(14deg);
  }

  /* Special order swap for mobile */
  @media (max-width: 600px) {
    .wing:nth-child(2n + 1) .wing-side:nth-child(1) {
      order: 2;
      transform: skewY(14deg);
      margin-left: -1px;
    }

    .wing:nth-child(2n + 1) .wing-side:nth-child(2) {
      order: 1;
      transform: skewY(-14deg);
      margin-left: 0;
    }
  }

  @media (min-width: 600px) {
    .wing:nth-child(4n + 1) .wing-side:nth-child(1),
    .wing:nth-child(4n + 2) .wing-side:nth-child(1) {
      transform: skewY(-14deg);
    }

    .wing:nth-child(4n + 3) .wing-side:nth-child(1),
    .wing:nth-child(4n + 4) .wing-side:nth-child(1) {
      transform: skewY(14deg);
    }

    .wing:nth-child(4n + 1) .wing-side:nth-child(2),
    .wing:nth-child(4n + 2) .wing-side:nth-child(2) {
      transform: skewY(14deg);
    }

    .wing:nth-child(4n + 3) .wing-side:nth-child(2),
    .wing:nth-child(4n + 4) .wing-side:nth-child(2) {
      transform: skewY(-14deg);
    }
  }

  @media (min-width: 900px) {
    .wing:nth-child(6n + 1) .wing-side:nth-child(1),
    .wing:nth-child(6n + 2) .wing-side:nth-child(1),
    .wing:nth-child(6n + 3) .wing-side:nth-child(1) {
      transform: skewY(-14deg);
    }

    .wing:nth-child(6n + 4) .wing-side:nth-child(1),
    .wing:nth-child(6n + 5) .wing-side:nth-child(1),
    .wing:nth-child(6n + 6) .wing-side:nth-child(1) {
      transform: skewY(14deg);
    }

    .wing:nth-child(6n + 1) .wing-side:nth-child(2),
    .wing:nth-child(6n + 2) .wing-side:nth-child(2),
    .wing:nth-child(6n + 3) .wing-side:nth-child(2) {
      transform: skewY(14deg);
    }

    .wing:nth-child(6n + 4) .wing-side:nth-child(2),
    .wing:nth-child(6n + 5) .wing-side:nth-child(2),
    .wing:nth-child(6n + 6) .wing-side:nth-child(2) {
      transform: skewY(-14deg);
    }
  }

  .wing-pattern {
    width: 30px;
    height: 30px;
    position: absolute;
    color: #fff;
  }

  .date {
    margin: 0;
    font-size: 36px;
    line-height: 1;
  }

  .breakAll {
    word-break: break-all;
  }

  h3 {
    margin-bottom: 6px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
