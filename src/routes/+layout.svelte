<!-- ****************************************************** SCRIPT -->
<script lang="ts">
  import "../style/reset.css";
  import "../style/tailwind.css";
  import "../style/main.css";

  import Snow from "$lib/components/layout.ts/snow.svelte";
  import Header from "$lib/components/layout.ts/header.svelte";
  import Footer from "$lib/components/layout.ts/footer.svelte";
</script>

<!-- ****************************************************** CONTENT -->
<div class="layout flex flex-col">
  <Snow />
  <Header />
  <main
    class="flex flex-1 flex-col gap-4 justify-center items-center align-middle h-full mx-auto text-center p-8 max-w-[700px]"
  >
    <slot />
  </main>
  <Footer />
</div>

<!-- ****************************************************** STYLE -->
<style lang="css">
  .layout {
    position: relative;
    min-height: 100vh;
  }
</style>
