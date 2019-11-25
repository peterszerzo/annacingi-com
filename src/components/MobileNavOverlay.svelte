<div class="mobile-nav-popup" transition:fade="{{ duration: 50, delay: 50 }}">
  <div class="mobile-nav-content">
    <IconButton icon="X" on:click={close} />
    <a on:click={close} href="/">Home</a>
    <a on:click={close} href="/about">About</a>
    <a on:click={close} href="mailto:annamcingi@gmail.com">Contact</a>
    <a on:click={close} href="anna-cingi-cv-english.pdf">CV</a>
    <div class="logo-container"><Logo/></div>
  </div>
</div>

<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import IconButton from "./IconButton.svelte";
  import Logo from "./Logo.svelte";

  const close = () => dispatch("close");

  const dispatch = createEventDispatcher();
</script>

<style>
  .mobile-nav-popup {
    background-color: #FFF;
    position: fixed;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .mobile-nav-content {
    text-align: center;
  }

  .logo-container {
    width: 88px;
    height: 88px;
    margin: 30px auto 0;
  }

  a {
    font-size: 24px;
    margin-top: 10px;
    font-family: "Quicksand", sans-serif;
    text-decoration: none;
    color: inherit;
    display: block;
    width: fit-content;
    margin: 15px auto 0;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom-color: currentColor;
  }
</style>
