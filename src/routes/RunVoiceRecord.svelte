<script>
  // @ts-ignore
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div class="run-voice-record animate__animated animate__slideInUp">
  <div class="lottie-rec">
    <LottiePlayer
      src="src/lib/ani-data/record.json"
      autoplay={true}
      loop={true}
      controls={false}
      renderer="svg"
      background="transparent"
      height={40}
      width={40}
    />
  </div>
  <div class="txt_label">REC</div>
</div>

<style lang="scss">
  .run-voice-record {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    animation-duration: 0.2s;
    .lottie-rec {
      width: 40px;
      height: 40px;
    }
    .txt_label {
      display: flex;
      align-items: center;
      padding-top: 3px;
    }
  }
</style>
