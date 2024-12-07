<!-- ****************************************************** SCRIPT -->
<script lang="ts">
  const snowflakes = Array.from({ length: 200 }, (_, i) => ({
    left: Math.random() * 100,
    animationDelayOuter: (Math.random() * 16 - 8).toFixed(2) + "s",
    animationDelayInner: (Math.random() * 20 - 10).toFixed(2) + "s",
    opacity: Math.random() * 0.5 + 0.5,
    scale: Math.random() * 0.5 + 1,
  }));

  const snowflakesByWidthPixel = 0.1;
  let containerWidth: number = 0;
  $: snowflakesToDisplayNumber = Math.floor(containerWidth * snowflakesByWidthPixel);
</script>

<div class="snowflakes -z-10" aria-hidden="true" bind:clientWidth={containerWidth}>
  {#each snowflakes as { left, animationDelayOuter, animationDelayInner, opacity, scale }, index}
    <div
      class="snowflake"
      style="left: {left}%; animation-delay: {animationDelayOuter}; visibility: {index < snowflakesToDisplayNumber ? 'visible' : 'hidden'};"
    >
      <div
        class="inner"
        style="animation-delay: {animationDelayInner};"
      >
        <p style="opacity: {opacity}; transform: scale({scale});">❄</p>
      </div>
    </div>
  {/each}
</div>

<!-- ****************************************************** STYLE -->
<style lang="scss">
  .snowflakes {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 5px #000;
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
    animation-name: snowflakes-shake;
    animation-duration: 8s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }

  .snowflake .inner {
    animation-name: snowflakes-fall;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }

  @keyframes snowflakes-fall {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(120vh);
    }
  }

  @keyframes snowflakes-shake {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(80px);
    }
  }
</style>
