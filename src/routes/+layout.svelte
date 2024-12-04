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
<Snow />
<Header />
<main class="flex flex-col gap-4 justify-center mx-auto text-center p-8">
  <slot />
</main>
<Footer />

<!-- ****************************************************** STYLE -->
<style lang="css">
</style>
