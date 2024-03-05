<script>
  // @ts-ignore
  import AniPalyer from "$lib/util/AniPalyer.svelte";
  import BtnExit from "$lib/util/BtnExit.svelte";
  import { isMobile, speakResultExcellent } from "$lib/store";
</script>

<div
  class:mobile={$isMobile}
  class:run-total-result-excellent={"run-total-result-excellent"}
>
  <div class="group-result-mark">
    <AniPalyer
      src="src/lib/ani-data/excellent.json"
      style={`width: ${$isMobile ? 300 : 450}px; height: ${$isMobile ? 300 : 450}px`}
    />
    <div class="txt">Excellent</div>
    <BtnExit
      onclick={() => {
        $speakResultExcellent = false;
      }}
    />
  </div>
</div>

<style lang="scss">
  .run-total-result-excellent {
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
      margin-bottom: 80px;
      .txt {
        color: #fff;
        font-family: Rg-B, sans-serif;
        font-size: 3em;
        font-weight: 600;
        position: absolute;
        bottom: 10px;
      }
    }
    &.mobile {
      .txt {
        font-size: 2em;
        bottom: 0;
      }
    }
  }
</style>
