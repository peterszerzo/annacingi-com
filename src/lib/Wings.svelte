<div class="wings">
  <slot />
</div>

<style>
  .wings {
    text-align: center;
    max-width: 900px;
    margin: auto;
  }

  @media (min-width: 900px) {
    .wings {
      text-align: left;
    }
  }
</style>
