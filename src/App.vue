<script setup>
import Navbar from "./components/Navbar.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "App View | Vuejs",
  description: "Example of description",
});

</script>

<template>
  <Navbar />
  <div class="container mx-auto px-4">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component"/>
      </Suspense>
    </RouterView>
  </div>
</template>
