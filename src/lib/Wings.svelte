<div class="wings">
  <slot />
</div>

<style>
  .wings {
    text-align: center;
    max-width: 960px;
    margin: auto;
  }

  @media (min-width: 960px) {
    .wings {
      text-align: left;
    }
  }
</style>
