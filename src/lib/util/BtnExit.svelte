<script>
  import { isMobile } from "$lib/store";

  export let onclick = () => {};
</script>

<button class:mobile={$isMobile} class:btn-exit={"btn-exit"} on:click={onclick}
></button>

<style lang="scss">
  button {
    margin: 0;
    padding: 0;
    border: none;
  }
  .btn-exit {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: rgba($color: #000000, $alpha: 0.7);
    background-image: url("$lib/image/ico_delete_white.svg");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    transition: all 0.2s;
    &:active {
      transform: scale(0.9);
    }
    &.mobile {
      &.btn-exit {
        width: 40px;
        height: 40px;
        background-size: 24px;
      }
    }
  }
</style>
