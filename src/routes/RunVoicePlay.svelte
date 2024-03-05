<script>
  // @ts-ignore
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div class="run-voice-play animate__animated animate__slideInUp">
  <div class="lottie-voice-play">
    <LottiePlayer
      src="src/lib/ani-data/user-say.json"
      autoplay={true}
      loop={true}
      controls={false}
      renderer="svg"
      background="transparent"
      height={100}
      width={100}
    />
  </div>
</div>

<style lang="scss">
  .run-voice-play {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-duration: 0.2s;
    position: relative;
    .lottie-voice-play {
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: -20px;
    }
  }
</style>
