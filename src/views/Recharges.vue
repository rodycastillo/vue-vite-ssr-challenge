<template>
  <div class="mt-8">
    <p class="mb-2">Buscar empresas:</p>
    <div
      class="w-full relative h-[50px] bg-[#f4f5f6] flex items-center rounded-lg"
    >
      <input
        type="text"
        placeholder="ej: Culqi"
        class="p-2 px-4 bg-[transparent] h-full w-full focus:outline-none"
      />
      <span
        class="block absolute right-5 top-3 bottom-0 m-auto material-symbols-outlined text-base text-orange-500 over:transition-all hover:duration-700 hover:scale-[1.6] cursor-pointer"
      >
        search
      </span>
    </div>
    <div class="flex flex-col">
      <CardCompany
        v-for="(item, iItem) in store.providers"
        :key="iItem"
        :company="item.company"
        :img="item.image"
      />
    </div>
  </div>
</template>

<script setup>
import { onServerPrefetch } from "vue";
import { useHead } from "@vueuse/head";
import { appStore } from "../store";

import CardCompany from "../components/CardCompany.vue";

useHead({
  title: "Empresas | Vuejs",
  description: "Example of description",
});

const store = appStore();

if (!store.providers) store.getProviders();

onServerPrefetch(async () => {
  await store.getProviders();
});
</script>

<script>
export default {
  name: "Recharges",
};
</script>
