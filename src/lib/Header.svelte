<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "./Logo.svelte";
  import MobileNavOverlay from "./MobileNavOverlay.svelte";
  import IconButton from "./IconButton.svelte";

  let isMobileNavOpen = false;

  $: isActive = (linkPath: string) => {
    return [linkPath, `${linkPath}/`].indexOf($page.url.pathname) > -1;
  };
</script>

<header>
  <a href="/" class="main-link">
    <div class="main-link-logo-container">
      <Logo />
    </div>
    <div>
      <p class="main-link-text font-semibold">Anna Cingi</p>
      <p class="main-link-text font-light">set designer</p>
    </div>
  </a>
  <nav class="header-nav-mobile">
    <IconButton
      title="Open navigation"
      icon="Falafel"
      on:click={() => (isMobileNavOpen = !isMobileNavOpen)}
    />
  </nav>
  {#if isMobileNavOpen}
    <MobileNavOverlay on:close={() => (isMobileNavOpen = false)} />
  {/if}
  <nav class="header-nav-desktop font-geom">
    <a class="nav-link font-light font-geom" class:font-semibold={isActive("/about")} href="/about"
      >about</a
    >
    <a class="nav-link font-light font-geom" href="mailto:annamcingi@gmail.com">contact</a>
    <a class="nav-link font-light font-geom" href="/cms/images/anna-cingi-jul-2021.pdf">cv</a>
    <a
      class="nav-link font-light font-geom"
      href="/credits"
      class:font-semibold={isActive("/credits")}>credits</a
    >
  </nav>
</header>

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
    font-weight: 600;
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
    font-size: 18px;
    color: inherit;
    text-decoration: none;
    margin-left: 16px;
  }

  .nav-link:hover {
    border-bottom: 1px solid currentColor;
  }
</style>
