<script>
  import { stores } from "@sapper/app";
  import Logo from "./Logo.svelte";
  import MobileNavOverlay from "./MobileNavOverlay.svelte";
  import IconButton from "./IconButton.svelte";

  const { page } = stores();

  let isMobileNavOpen = false;
</script>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .main-link {
    text-decoration: none;
    color: inherit;
    display: flex;
  }

  .main-link-text {
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    line-height: 1.2;
    margin: 0;
  }

  .main-link-text--bold {
    font-weight: bold;
  }

  .main-link-logo-container {
    width: 40px;
    height: 40px;
    margin-right: 6px;
    border-radius: 4px;
    background-color: #000;
    color: #fff;
  }

  .main-link :global(svg) {
    width: 40px;
    height: 40px;
  }

  .header-nav-desktop {
    display: none;
    align-self: flex-end;
  }

  @media (min-width: 600px) {
    .header-nav-mobile {
      display: none;
    }

    .header-nav-desktop {
      display: block;
    }
  }

  .nav-link {
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    color: inherit;
    text-decoration: none;
    margin-left: 16px;
  }

  .active-nav-link {
    font-weight: 700;
  }

  .nav-link:hover {
    border-bottom: 2px solid currentColor;
  }
</style>

<header>
  <a href="/" class="main-link">
    <div class="main-link-logo-container">
      <Logo />
    </div>
    <div>
      <p class="main-link-text main-link-text--bold">Anna Cingi</p>
      <p class="main-link-text">set designer</p>
    </div>
  </a>
  <nav class="header-nav-mobile">
    <IconButton
      title="Open navigation"
      icon="Falafel"
      on:click={() => (isMobileNavOpen = !isMobileNavOpen)} />
  </nav>
  {#if isMobileNavOpen}
    <MobileNavOverlay on:close={() => (isMobileNavOpen = false)} />
  {/if}
  <nav class="header-nav-desktop">
    <a
      class="nav-link"
      class:active-nav-link={['/about', '/about/'].indexOf($page.path) > -1}
      href="/about">about</a>
    <a class="nav-link" href="mailto:annamcingi@gmail.com">contact</a>
    <a class="nav-link" href="/cms/files/anna-cingi-cv-english.pdf">cv</a>
    <a class="nav-link" style="display: none" href="/credits">credits</a>
  </nav>
</header>
