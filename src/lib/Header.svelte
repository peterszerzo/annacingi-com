<script lang="ts">
  import { page } from "$app/state";
  import Logo from "./Logo.svelte";
  import MobileNavOverlay from "./MobileNavOverlay.svelte";
  import IconButton from "./IconButton.svelte";

  let isMobileNavOpen = $state(false);

  let isActive = $derived((linkPath: string) => {
    return [linkPath, `${linkPath}/`].indexOf(page.url.pathname) > -1;
  });
</script>

<header>
  <a href="/" class="main-link">
    <div class="main-link-logo-container">
      <Logo />
    </div>
    <div>
      <p class="main-link-title">Anna Cingi</p>
      <p class="main-link-subtitle">theatre designer</p>
    </div>
  </a>
  <nav class="header-nav-mobile">
    <IconButton
      title="Open navigation"
      icon="Falafel"
      onclick={() => (isMobileNavOpen = !isMobileNavOpen)}
    />
  </nav>
  {#if isMobileNavOpen}
    <MobileNavOverlay close={() => { isMobileNavOpen = false }} />
  {/if}
  <nav class="header-nav-desktop font-geom">
    <a
      class="nav-link font-light"
      class:font-semibold={isActive("/about")}
      href="/about">about</a
    >
    <a class="nav-link font-light" href="mailto:annamcingi@gmail.com"
      >contact</a
    >
    <a class="nav-link font-light" href="/cms/images/eng-jan-2024.pdf"
      >cv</a
    >
    <a
      class="nav-link font-light"
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
    max-width: 1080px;
    margin: auto;
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media (min-width: 840px) {
    header {
      padding: 20px;
    }
  }

  .main-link-title {
    font-family: "NewTitle", sans-serif;
    font-weight: 200;
    font-size: 44px;
    line-height: 1;
    letter-spacing: 1.5px;
    color: inherit;
    display: flex;
  }

  .main-link-subtitle {
    font-size: 14px;
    font-weight: 600;
    color: inherit;
    line-height: 1.2;
    margin: 0;
  }

  .main-link-logo-container {
    width: 54px;
    height: 54px;
    border-radius: 6px;
    background-color: #000;
    color: #fff;
  }

  .main-link {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .main-link :global(svg) {
    width: 100%;
    height: 100%;
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
