<!-- ****************************************************** SCRIPT -->
<script lang="ts">
</script>

<!-- ****************************************************** CONTENT -->
<header class="flex justify-center mx-auto text-center w-full">
  {#each new Array(2).fill(null) as _, index}
    {@const lastLayer = index === 1}
    <div
      class="w-full p-8 border-b border-solid border-white bg-black bg-opacity-30"
      class:blur-md={lastLayer}
      class:absolute={lastLayer}
      class:top-0={lastLayer}
      class:opacity-50={lastLayer}
    >
      <h1>🎄🛷🦌 Advente of Svelte 2024 🎁⛪🧑‍🎄</h1>
      <h2 class="text-lg text-neutral-400 font-normal italic">
        implemented by @trixky
      </h2>
    </div>
  {/each}
</header>

<!-- ****************************************************** STYLE -->
<style lang="css">
</style>
