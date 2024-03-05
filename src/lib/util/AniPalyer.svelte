<script>
  import { isMobile } from "$lib/store";

  export let src = "";
  export let style = "";
  export let loop = false;
</script>

<div style="display: block;">
  <script
    src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
    type="module"
  ></script>
  <dotlottie-player
    {src}
    {style}
    {loop}
    background="transparent"
    speed="1"
    direction="1"
    playMode="normal"
    autoplay
  ></dotlottie-player>
</div>

<!-- style={`width: ${$isMobile ? 300 : 450}px; height: ${$isMobile ? 300 : 450}px`} -->
