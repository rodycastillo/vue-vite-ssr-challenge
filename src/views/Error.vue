<template>
  <div class="flex justify-center items-center w-full h-full min-h-[70vh]">
    <p>Error | 401</p>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  name: "Error",
  setup() {
    useHead({
      title: "Error 401 | Vuejs",
      description: "Example of description",
    });
  },
};
</script>
