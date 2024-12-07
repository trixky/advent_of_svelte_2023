<!-- ****************************************************** SCRIPT -->
<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<!-- ****************************************************** CONTENT -->
<footer>
  <div class="flex justify-center w-full">
    {#each new Array(2).fill(null) as _, index}
      {@const blurLayer = index === 0}
      <div
        class="w-full justify-center flex flex-col bg-black gap-0 p-4 border-t border-solid border-white bg-opacity-30"
        class:blur-md={blurLayer}
        class:absolute={blurLayer}
        class:bottom-0={blurLayer}
        class:opacity-100={blurLayer}
        class:bg-opacity-100={blurLayer}
        style="z-index: {blurLayer ? 2 : 10};"
      >
        <ul id="footer-icons" class="flex w-full justify-center items-center gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/mathis-bois-2744781a9/"
              target="_blank"
            >
              <Icon icon="mdi:linkedin" width={32} />
            </a>
          </li>
          <li>
            <a href="https://x.com/trixky_fr" target="_blank">
              <Icon icon="ri:twitter-x-fill" width={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/trixky" target="_blank">
              <Icon icon="mdi:github" width={34} />
            </a>
          </li>
          <li>
            <a href="https://profile.intra.42.fr/users/mabois" target="_blank">
              <Icon icon="simple-icons:42" width={30} />
            </a>
          </li>
          <li class="disabled">
            <!-- <a href="/blog" target="_blank"> -->
            <Icon icon="jam:blogger" width={26} />
            <!-- </a> -->
          </li>
        </ul>
      </div>
    {/each}
  </div>
</footer>

<!-- ****************************************************** STYLE -->
<style lang="postcss">
  #footer-icons > li:not(.disabled) {
    @apply opacity-80 hover:opacity-100 duration-300 transition-opacity;
  }

  #footer-icons > li.disabled {
    @apply opacity-20 cursor-not-allowed;
  }
</style>
