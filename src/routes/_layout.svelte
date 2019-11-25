<div class="container">
  <Header />

  <main>
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
</style>
