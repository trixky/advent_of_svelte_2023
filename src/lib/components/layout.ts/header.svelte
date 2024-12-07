<!-- ****************************************************** SCRIPT -->
<script lang="ts">
  import days from "$lib/data/days";
  import { onMount } from "svelte";

  const title = "Advente of Svelte";

  let titleColorShift = 0;
  const titleColors = [
    "red",
    "white",
    "green",
    "cyan",
    "yellow",
    "purple",
    "orange",
  ];
  function getTitleCharacterColor(index: number) {
    return titleColors[(index + titleColorShift) % titleColors.length];
  }

  function shiftTitleColor() {
    titleColorShift++;
  }

  onMount(() => {
    setInterval(shiftTitleColor, 1000);
  });

  let headerHeight = 0;
  let dayTitleTooltip = "dayTitleTooltip";
  let showDayTitleTooltip = false;
</script>

<!-- ****************************************************** CONTENT -->
<header
  class="fixed flex flex-col justify-center items-center mx-auto text-center w-full gap-4"
  bind:clientHeight={headerHeight}
>
  <p class="absolute invisible">{titleColorShift}</p>
  <div class="flex justify-center w-full">
    {#each new Array(2).fill(null) as _, index}
      {@const blurLayer = index === 0}
      <div
        class="w-full flex flex-col bg-black gap-0 p-6 pb-7 border-b border-solid border-white bg-opacity-30"
        class:blur-md={blurLayer}
        class:absolute={blurLayer}
        class:top-0={blurLayer}
        class:opacity-100={blurLayer}
        class:bg-opacity-100={blurLayer}
        style="z-index: {blurLayer ? 2 : 10};"
      >
        <!-- 🎄🛷🦌🎁⛪🧑‍🎄  -->
        <div class="relative w-fit mx-auto mb-2">
          <div class="flex gap-3">
            <p class="text-4xl -rotate-12 -translate-y-1">🎁</p>
            <h1>
              {#each title as titleCharacter, index}
                <span
                  class="text-4xl"
                  style="color: {getTitleCharacterColor(index)};"
                  >{titleCharacter}</span
                >
              {/each}
            </h1>
            <p class="text-4xl rotate-12 -translate-y-1">🎄</p>
          </div>
        </div>
        <div
          class="flex justify-between mx-auto sm:gap-24 w-full sm:w-fit mt-3 sm:mt-0 mb-1 sm:mb-0"
        >
          <h3 class="text-base font-normal italic text-left">
            <a href="https://trixky.github.io/portfolio/" target="_blank">
              <span class="opacity-50"
                >implemented<br class="block sm:hidden" /> by</span
              >&nbsp;✨&nbsp;<span class="link-underlined">@trixky</span>
            </a>
          </h3>
          <h3 class="text-base font-normal italic text-right">
            <span class="no-line-throw">🌠</span>
            <a
              href="https://advent.sveltesociety.dev/2023#challenges"
              target="_blank"
            >
              <span class="link-underlined opacity-50">edition</span>
              <br class="block sm:hidden" />
              <span class="link-underlined italic font-bold text-white"
                >2023</span
              >
            </a>
          </h3>
        </div>
      </div>
    {/each}
  </div>
  <nav class="-mt-8 -mb-8 z-20 px-6 overflow-hidden w-full">
    <ol class="flex w-full flex-wrap justify-center gap-2">
      {#each days as day, index}
        <li
          class="highlight"
          on:mouseenter={() => {
            dayTitleTooltip = day.title;
            showDayTitleTooltip = true;
          }}
          on:mouseleave={() => {
            showDayTitleTooltip = false;
          }}
        >
          <a href={`/${day.slug}`}>
            <div
              class="relative w-8 h-8 flex justify-center bg-stone-800 border border-solid border-white"
            >
              <p class="my-auto">{index + 1}</p>
            </div>
          </a>
        </li>
      {/each}
      {#each new Array(25 - days.length).fill(null) as _, index}
        <li
          on:mouseenter={() => {
            dayTitleTooltip = "???";
            showDayTitleTooltip = true;
          }}
          on:mouseleave={() => {
            showDayTitleTooltip = false;
          }}
        >
          <div
            class="relative w-8 h-8 flex justify-center bg-neutral-800 border border-solid border-white"
          >
            <p class="my-auto opacity-40">?</p>
          </div>
        </li>
      {/each}
    </ol>
    <div
      class="day-title-tooltip opacity-0 duration-300 transition-opacity mt-3"
      class:opacity-100={showDayTitleTooltip}
    >
      <p class="text-sm">{dayTitleTooltip}</p>
    </div>
  </nav>
</header>
<!-- svelte-ignore element_invalid_self_closing_tag -->
<div style="height: {headerHeight}px;" />

<!-- ****************************************************** STYLE -->
<style lang="postcss">
  li {
    @apply cursor-pointer;
    box-shadow: 0px 0px 5px black;
  }

  li.highlight {
    /* add shadow centered */
    box-shadow:
      0px 0px 5px black,
      0px 0px 8px white;
  }
</style>
