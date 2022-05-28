<script lang="ts">
  export let title: string;
</script>

<h2 class="wing-title title font-geom font-light stickout">{title}</h2>

<style>
  .wing-title {
    width: -moz-fit-content;
    width: fit-content;
    color: #fff;
    background-color: #000;
    width: 280px;
    padding: 4px 10px;
    transform: skewY(-14deg);
    text-align: center;
    margin: 20px auto 70px;
  }
</style>
