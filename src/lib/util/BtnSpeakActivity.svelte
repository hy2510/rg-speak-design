<script>
  export let icon = "";
  export let word = "";
  export let onClick = function () {};
</script>

<button class="btn-speak-play" on:click={onClick}>
  <div class={icon && icon}></div>
  <div class="txt-word">{word}</div>
</button>

<style lang="scss">
  button {
    padding: 0;
    margin: 0;
    border: none;
  }
  @mixin btn {
    min-width: 150px;
    height: 40px;
    background-color: rgba($color: #fff, $alpha: 0.08);
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1.1em;
    transition: all 0.2s;
    cursor: pointer;
    &:active {
      transform: scale(0.9);
    }
    .txt-word {
      display: block;
      padding-top: 2px;
      color: #fff;
      font-family: Rg-B;
    }
  }
  @mixin ico {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-size: 40px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .btn-speak-play {
    @include btn;
    .ico-play {
      @include ico;
      background-image: url("$lib/image/btn_play.svg");
    }
    .ico-record {
      @include ico;
      background-image: url("$lib/image/ico_rec.svg");
    }
  }
</style>
