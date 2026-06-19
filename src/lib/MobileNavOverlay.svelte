<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import IconButton from "./IconButton.svelte";
  import Logo from "./Logo.svelte";

  interface Props {
    close: () => void
  }

  let { close }: Props = $props();

  onMount(() => {
    document.body.style.overflowY = "hidden";
  });

  onDestroy(() => {
    document.body.style.overflowY = "auto";
  });
</script>

<div class="mobile-nav-popup" transition:fade={{ duration: 50, delay: 50 }}>
  <div class="mobile-nav-close">
    <IconButton title="Close navigation" icon="X" onclick={close} />
  </div>
  <div class="mobile-nav-content">
    <a onclick={close} href="/">Home</a>
    <a onclick={close} href="/about">About</a>
    <a onclick={close} href="mailto:annamcingi@gmail.com">Contact</a>
    <a onclick={close} href="/cms/images/eng-jan-2024.pdf">CV</a>
    <div class="logo-container"><Logo /></div>
  </div>
</div>

<style>
  .mobile-nav-popup {
    background-color: #fff;
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

  .mobile-nav-close {
    position: absolute;
    top: 13px;
    right: 10px;
  }

  a {
    margin-top: 4px;
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
