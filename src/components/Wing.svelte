<a href="projects/{project.id}" class="wing">
  <div class="wing-side stickout">
    <div>
      <h3 class="title">{project.title}</h3>
      {#each project.tags as tag}
        <Tag tag={tag} />
      {/each}
    </div>
    <p class="date">{project.openedAt[1]} / {project.openedAt[0]}</p>
  </div>
  {#if project.thumbnailImg}
    <div class="wing-side stickout" style="background-image: url({project.thumbnailImg})"></div>
  {:else}
    <div class="wing-side stickout" style="background: #454545;">
      {#each grid as gridItem}
        <div class="wing-pattern" style="top: {-10 + gridItem[0] * 40}px; left: {-10 + gridItem[1] * 40 + (gridItem[0] % 2 === 0 ? 20 : 0)}px;">
          <svg viewBox="0 0 1000 1000">
            <use xlink:href="#logo" />
          </svg>
        </div>
      {/each}
    </div>
  {/if}
</a>

<script>
  import Tag from "./Tag.svelte";

  export let project;

  const range = n => [...Array(n).keys()];

  const range2 = n => m =>
    range(n)
      .map(i => range(m).map(j => [i, j]))
      .reduce((accumulator, current) => [...accumulator, ...current], []);
  
  let grid = range2(8)(4);
</script>

<style>
  .wing {
    display: inline-flex;
    text-decoration: none;
    text-align: left;
    color: inherit;
    padding-top: 18px;
    padding-bottom: 18px;
    margin-left: -1px;
    margin-bottom: -2px;
  }

  .wing:hover {
    filter: brightness(95%);
  }

  .wing-side {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 140px;
    height: 240px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    position: relative;
  }

  .wing-side:nth-child(2) {
    margin-left: -1px;
  }

  .wing:nth-child(2n+0) .wing-side:nth-child(1) {
    transform: skewY(14deg);
  }

  .wing:nth-child(2n+1) .wing-side:nth-child(1) {
    transform: skewY(-14deg);
  }

  .wing:nth-child(2n+0) .wing-side:nth-child(2) {
    transform: skewY(-14deg);
  }

  .wing:nth-child(2n+1) .wing-side:nth-child(2) {
    transform: skewY(14deg);
  }

  /* Special order swap for mobile */
  @media (max-width: 600px) {
    .wing:nth-child(2n+1) .wing-side:nth-child(1) {
      order: 2;
      transform: skewY(14deg);
      margin-left: -1px;
    }

    .wing:nth-child(2n+1) .wing-side:nth-child(2) {
      order: 1;
      transform: skewY(-14deg);
      margin-left: 0;
    }
  }

  @media (min-width: 600px) {
    .wing:nth-child(4n+1) .wing-side:nth-child(1),
    .wing:nth-child(4n+2) .wing-side:nth-child(1)
    {
      transform: skewY(-14deg);
    }

    .wing:nth-child(4n+3) .wing-side:nth-child(1),
    .wing:nth-child(4n+4) .wing-side:nth-child(1)
    {
      transform: skewY(14deg);
    }

    .wing:nth-child(4n+1) .wing-side:nth-child(2),
    .wing:nth-child(4n+2) .wing-side:nth-child(2)
    {
      transform: skewY(14deg);
    }

    .wing:nth-child(4n+3) .wing-side:nth-child(2),
    .wing:nth-child(4n+4) .wing-side:nth-child(2)
    {
      transform: skewY(-14deg);
    }
  }

  @media (min-width: 860px) {
    .wing:nth-child(6n+1) .wing-side:nth-child(1),
    .wing:nth-child(6n+2) .wing-side:nth-child(1),
    .wing:nth-child(6n+3) .wing-side:nth-child(1)
    {
      transform: skewY(-14deg);
    }

    .wing:nth-child(6n+4) .wing-side:nth-child(1),
    .wing:nth-child(6n+5) .wing-side:nth-child(1),
    .wing:nth-child(6n+6) .wing-side:nth-child(1)
    {
      transform: skewY(14deg);
    }

    .wing:nth-child(6n+1) .wing-side:nth-child(2),
    .wing:nth-child(6n+2) .wing-side:nth-child(2),
    .wing:nth-child(6n+3) .wing-side:nth-child(2)
    {
      transform: skewY(14deg);
    }

    .wing:nth-child(6n+4) .wing-side:nth-child(2),
    .wing:nth-child(6n+5) .wing-side:nth-child(2),
    .wing:nth-child(6n+6) .wing-side:nth-child(2)
    {
      transform: skewY(-14deg);
    }
  }

  .wing-pattern {
    width: 30px;
    height: 30px;
    position: absolute;
    color: #FFF;
  }

  .date {
    margin: 0;
    font-size: 20px;
    color: #999;
  }

  h3 {
    margin-bottom: 6px;
  }
</style>
