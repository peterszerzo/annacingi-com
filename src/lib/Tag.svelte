<script lang="ts">
  export let tag: string;
  export let dark: boolean | undefined = undefined;

  $: highlighted = tag === "set designer" || tag === "costume designer";
</script>

<span class="tag" class:highlighted-tag={highlighted} class:dark-tag={dark}>{tag}</span>

<style>
  .tag {
    padding: 2px 6px;
    display: inline-block;
    background-color: #efefef;
    color: #545454;
    word-break: none;
    width: fit-content;
    border-radius: 2px;
    font-size: 12px;
    text-decoration: none;
  }

  .highlighted-tag {
    background-color: #e0ff0c;
    color: #232323;
  }

  .dark-tag {
    background-color: #000;
    color: #fff;
  }
</style>
