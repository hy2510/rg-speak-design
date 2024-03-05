<script>
  // @ts-ignore
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div class="run-ebook-audio-play animate__animated animate__slideInUp">
  <div class="lottie-sound">
    <LottiePlayer
      src="src/lib/ani-data/audio-play.json"
      autoplay={true}
      loop={true}
      controls={false}
      renderer="svg"
      background="transparent"
      height={40}
      width={40}
    />
  </div>
</div>

<style lang="scss">
  .run-ebook-audio-play {
    animation-duration: 0.2s;
    color: #fff;
    height: 40px;
    position: relative;
    .lottie-sound {
      width: 40px;
      height: 40px;
    }
  }
</style>
