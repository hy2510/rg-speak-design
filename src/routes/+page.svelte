<script>
  import { bookLevel, isMobile } from "$lib/store";
  import FrameHeader from "./FrameHeader.svelte";
  import FrameBody from "./FrameBody.svelte";
  import FrameEbookPage from "./FrameEbookPage.svelte";
  import FramePlayBar from "./FramePlayBar.svelte";
  import EbPageData03 from "$lib/sample-data/levelk/EbPageData03.svelte";
  import EbPageData04 from "$lib/sample-data/levelk/EbPageData04.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    $isMobile = /Android|iPhone/i.test(window.navigator.userAgent);
    $bookLevel = "K";
  });
</script>

<FrameHeader />
<FrameBody>
  {#if $isMobile}
    <FrameEbookPage
      eBookUrl="https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-5.jpg"
    >
      <EbPageData03 />
    </FrameEbookPage>
  {:else}
    <FrameEbookPage
      eBookUrl="https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-5.jpg"
    >
      <EbPageData03 />
    </FrameEbookPage>
    <FrameEbookPage
      eBookUrl="https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-6.jpg"
    >
      <EbPageData04 />
    </FrameEbookPage>
  {/if}
</FrameBody>
<FramePlayBar progress="10%" />
