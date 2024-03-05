import { writable } from "svelte/store";

export let isMobile = writable();
export let speakReady = writable(true);
export let speakEbookAudioPlay = writable(false);
export let speakVoiceRecord = writable(false);
export let speakVoicePlay = writable(false);

export let speakRecResultGoodJob = writable(false);
export let speakRecResultTryAgain = writable(false);

export let speakResultExcellent = writable();
export let speakResultGoodEffort = writable();

export let bookLevel = writable();
