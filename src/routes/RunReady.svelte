<script>
  import {
    isMobile,
    speakReady,
    speakEbookAudioPlay,
    speakVoiceRecord,
    speakVoicePlay,
  } from "$lib/store";
  import BtnSpeakActivity from "$lib/util/BtnSpeakActivity.svelte";

  const moreTime = 1000;
  export let audioLength = 1000;
  export let voiceLength = audioLength + moreTime;

  function activeRunEbookAudioPlay() {
    $speakReady = false;
    $speakEbookAudioPlay = true;
    setTimeout(() => {
      $speakReady = true;
      $speakEbookAudioPlay = false;
    }, audioLength + 500);
  }

  function activeRunVoiceRecord() {
    $speakReady = false;
    $speakVoiceRecord = true;
    setTimeout(() => {
      $speakVoiceRecord = false;
      $speakVoicePlay = true;
      setTimeout(() => {
        $speakVoicePlay = false;
        $speakReady = true;
      }, voiceLength);
    }, audioLength + moreTime);
  }
</script>

<div class:mobile={$isMobile}>
  <div class="run-ready animate__animated animate__slideInUp">
    <BtnSpeakActivity
      icon="ico-play"
      word="Listen"
      onClick={activeRunEbookAudioPlay}
    />
    <div class="txt-some">&</div>
    <BtnSpeakActivity
      icon="ico-record"
      word="Speak"
      onClick={activeRunVoiceRecord}
    />
  </div>
</div>

<style lang="scss">
  .run-ready {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    animation-duration: 0.2s;
    .txt-some {
      display: block;
      padding-top: 2px;
      color: rgba($color: #fff, $alpha: 0.3);
      font-family: Rg-B;
    }
  }

  /* 모바일 */
  .mobile {
    .run-ready {
      gap: 10px;
    }
  }
</style>
