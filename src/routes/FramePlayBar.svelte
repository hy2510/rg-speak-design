<script>
  import {
    isMobile,
    speakReady,
    speakEbookAudioPlay,
    speakVoiceRecord,
    speakVoicePlay,
    speakRecResultGoodJob,
    speakRecResultTryAgain,
  } from "$lib/store";
  import RunReady from "./RunReady.svelte";
  import RunEbookAudioPlay from "./RunEbookAudioPlay.svelte";
  import RunVoiceRecord from "./RunVoiceRecord.svelte";
  import RunVoicePlay from "./RunVoicePlay.svelte";
  import RunRecResultGoodJob from "./RunRecResultGoodJob.svelte";
  import RunRecResultTryAgain from "./RunRecResultTryAgain.svelte";

  export let progress = "0%";
</script>

<div class:mobile={$isMobile}>
  <div class="play-bar">
    <div class="progress">
      <div class="progress-bar" style="width: {progress};"></div>
    </div>
    {#if $speakReady}
      <RunReady />
    {/if}
    {#if $speakEbookAudioPlay}
      <RunEbookAudioPlay />
    {/if}
    {#if $speakVoiceRecord}
      <RunVoiceRecord />
    {/if}
    {#if $speakVoicePlay}
      <RunVoicePlay />
    {/if}
    {#if $speakRecResultGoodJob}
      <RunRecResultGoodJob />
    {/if}
    {#if $speakRecResultTryAgain}
      <RunRecResultTryAgain />
    {/if}
  </div>
</div>

<style lang="scss">
  .play-bar {
    width: 100%;
    height: 60px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-family: Rg-B, sans-serif;
    .progress {
      width: 100%;
      height: 4px;
      background-color: rgba($color: #fff, $alpha: 0.15);
      .progress-bar {
        height: 4px;
        border-radius: 100px;
        background-color: #d95355;
      }
    }
  }
</style>
