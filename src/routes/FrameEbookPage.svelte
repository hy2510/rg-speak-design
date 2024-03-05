<script>
  import { bookLevel } from "$lib/store";

  export let eBookUrl = "";
</script>

<div
  class={`speak-ebook-page ${$bookLevel == "K" ? "levelk" : $bookLevel == "1" ? "level1" : "level2"}`}
  style="background-image: url({eBookUrl});"
>
  <slot />
</div>

<style lang="scss">
  .speak-ebook-page {
    color: #fff;
    position: relative;
    background-repeat: no-repeat;
    &.levelk {
      width: 480px;
      height: 750px;
      background-size: 480px 750px;
    }
    &.level1 {
      width: 525px;
      height: 750px;
      background-size: 525px 750px;
    }
    &.level2 {
      width: 525px;
      height: 750px;
      background-size: 525px 750px;
    }
  }
  :global(.t) {
    position: absolute;
    transform: scale(0.25);
    transform-origin: top left;
    white-space: nowrap;
  }
</style>
