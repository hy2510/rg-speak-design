<script>
  import { speakResultExcellent, speakResultGoodEffort } from "$lib/store";
  import BtnExit from "$lib/util/BtnExit.svelte";
  import RunTotalResultExcellent from "./RunTotalResultExcellent.svelte";
  import RunTotalResultGoodEffort from "./RunTotalResultGoodEffort.svelte";
</script>

<div>
  <BtnExit />
  {#if $speakResultExcellent}
    <RunTotalResultExcellent />
  {/if}
  {#if $speakResultGoodEffort}
    <RunTotalResultGoodEffort />
  {/if}
</div>
