<div class="container">
  <Header />

  <main class="content">
    <slot></slot>
  </main>

  <Footer />
</div>

<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<style>
  .container {
    max-width: 860px;
    overflow-x: hidden;
    margin: auto;
    padding: 10px;
  }

  @media (min-width: 860px) {
    .container {
      padding: 20px 10px;
    }
  }

  .content {
    padding: 40px 0;
  }

  @media (min-width: 860px) {
    .content {
      padding: 80px 0;
    }
  }

  :global(.stickout) {
    position: relative;
  }

  :global(.stickout:before) {
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

  :global(.stickout:after) {
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

  :global(.title) {
    margin: 0;
    word-break: break-all;
    font-size: 30px;
    text-transform: uppercase;
    font-family: "Quicksand", sans-serif;
  }
</style>
