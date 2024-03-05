<script>
  import AniPalyer from "$lib/util/AniPalyer.svelte";
  import BtnExit from "$lib/util/BtnExit.svelte";
  import { isMobile, speakResultGoodEffort } from "$lib/store";
</script>

<div
  class:mobile={$isMobile}
  class:run-total-result-good-effort={"run-total-result-good-effort"}
>
  <div class="group-result-mark">
    <AniPalyer
      src="src/lib/ani-data/good-effort.json"
      style={`width: ${$isMobile ? 320 : 500}px; height: ${$isMobile ? 160 : 350}px`}
    />
    <div class="txt">Good Effort</div>
    <BtnExit
      onclick={() => {
        $speakResultGoodEffort = false;
      }}
    />
  </div>
</div>

<style lang="scss">
  .run-total-result-good-effort {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.7);
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .group-result-mark {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .txt {
        color: #fff;
        font-family: Rg-B, sans-serif;
        font-size: 3em;
        font-weight: 600;
        /* position: absolute;
        bottom: 20px; */
      }
    }
    &.mobile {
      .txt {
        font-size: 2em;
        position: static;
      }
    }
  }
</style>
