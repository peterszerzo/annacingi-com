<script lang="ts">
  import { navigating } from "$app/state";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div class="container space-y-lg" class:container--active={!navigating.complete}>
  <Header />

  <main class="content space-y-lg">
    <slot />
  </main>

  <Footer />
</div>

<style>
  .container {
    max-width: 1080px;
    overflow-x: hidden;
    margin: auto;
    padding: 10px;
    opacity: 0.4;
    transition: opacity 0.3s ease-in-out;
  }

  .container--active {
    opacity: 1;
  }

  @media (min-width: 860px) {
    .container {
      padding: 20px 10px;
    }
  }

  .content {
    min-height: calc(100vh - 230px);
  }

  :global {
    h1,
    h2,
    h3,
    p {
      margin: 0;
    }

    .stickout {
      position: relative;
    }

    .stickout::before, .stickout::after {
      border-color: #cecece;
      transition: border-color 0.2s ease-in-out;
    }

    .stickout::before {
      content: " ";
      position: absolute;
      z-index: 9;
      pointer-events: none;
      top: -10px;
      bottom: -10px;
      left: 0;
      right: 0;
      border-left: 1px solid;
      border-right: 1px solid;
      border-color: #cecece;
    }

    .stickout::after {
      content: " ";
      position: absolute;
      z-index: 9;
      pointer-events: none;
      left: -10px;
      right: -10px;
      top: 0;
      bottom: 0;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: #cecece;
    }

    .title {
      margin: 0;
      font-size: 54px;
      line-height: 1;
      text-transform: uppercase;
    }

    .space-y-md > * + * {
      margin-top: 20px;
    }

    .space-y-lg > * + * {
      margin-top: 60px;
    }
  }
</style>
