<script lang="ts">
  import Falafel from "./icons/Falafel.svelte";
  import X from "./icons/X.svelte";
  
  interface Props {
    onclick: () => void;
    icon: "X" | "Falafel";
    title: string;
  }

  let { onclick, icon, title }: Props = $props();

  let IconComponent = $derived.by(() => {
    if (icon === "Falafel") {
      return Falafel;
    }
    if (icon === "X") {
      return X;
    }
  });
</script>

<button {title} class="icon-button" {onclick}>
  <IconComponent />
</button>

<style>
  .icon-button {
    cursor: pointer;
    color: #343434;
    width: 38px;
    height: 38px;
    border-radius: 4px;
    padding: 5px;
    background: none;
    border: 0;
  }

  .icon-button:hover {
    color: #000;
    background-color: #f5f5f5;
  }

  .icon-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px #efefef;
  }
</style>
