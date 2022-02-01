<script lang="ts">
  import Falafel from "./icons/Falafel.svelte";
  import X from "./icons/X.svelte";

  export let icon: "X" | "Falafel";
  export let title: string;

  $: useIcon = (() => {
    if (icon === "Falafel") {
      return Falafel;
    }
    if (icon === "X") {
      return X;
    }
  })();
</script>

<button {title} class="icon-button" on:click>
  <svelte:component this={useIcon} />
</button>

<style>
  .icon-button {
    width: 38px;
    height: 38px;
    border-radius: 4px;
    padding: 5px;
    background: none;
    border: 0;
  }

  .icon-button:hover {
    background-color: #f5f5f5;
  }

  .icon-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px #efefef;
  }
</style>
