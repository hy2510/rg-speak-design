<script>
  import { bookLevel, isMobile } from "$lib/store";

  $: innerHeight = 0;
  $: innerWidth = 0;
  $: eBookSizeH = 750;
  $: eBookSizeW = $bookLevel == "K" ? 480 : $bookLevel == "1" ? 525 : 525;
  $: eBookScalePc = (innerHeight - 92) / eBookSizeH;
  $: eBookScaleMobile = innerWidth / eBookSizeW;
  $: mobilePositionTopSubtractValue =
    ((innerWidth / eBookSizeW) * eBookSizeH) / 2;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class:mobile={$isMobile} class:speak-body={"speak-body"}>
  {#if $isMobile}
    <div
      class="ebook-viewer"
      style="transform: scale({eBookScaleMobile}); top: calc(50% - {mobilePositionTopSubtractValue}px)"
    >
      <slot />
    </div>
  {:else}
    <div class="ebook-viewer" style="transform: scale({eBookScalePc});">
      <slot />
    </div>
  {/if}
</div>

<style lang="scss">
  .speak-body {
    width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    position: relative;
    .ebook-viewer {
      position: absolute;
      display: flex;
      flex-direction: row;
      transform-origin: top center;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 15px;
      overflow: hidden;
      margin-top: 15px;
    }
    &.mobile {
      .ebook-viewer {
        border: none;
        border-radius: 0;
        margin-top: 0;
      }
    }
  }
</style>
