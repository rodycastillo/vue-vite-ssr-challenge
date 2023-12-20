<template>
  <Suspense>
    <template #fallback>
      <div>Loading</div>
    </template>
    <div>
      <CardBalance :balance="store.balance" />
      <div class="flex flex-col gap-5 mt-8">
        <CardMethod
          v-for="(method, iMethod) in methods"
          :key="iMethod"
          :name="method.name"
          :icon="method.icon"
          :to="method.to"
        />
      </div>
    </div>
  </Suspense>
</template>

<script setup>
import { onServerPrefetch } from "vue";
import { appStore } from "../store";
import { useHead } from "@vueuse/head";

import CardBalance from "../components/CardBalance.vue";
import CardMethod from "../components/CardMethod.vue";

useHead({
  title: "Recargas | Vuejs",
  description: "Example of description",
});

const store = appStore();

if (!store.balance) store.getCurrentBalance();

onServerPrefetch(async () => {
  await store.getCurrentBalance();
});

const methods = [
  {
    name: "Recargas",
    icon: "tap_and_play",
    to: "/recharges/",
  },
  {
    name: "Pago de servicios",
    icon: "emoji_objects",
    to: "/",
  },
  {
    name: "Historial de ganancias y operaciones",
    icon: "event_available",
    to: "/",
  },
];
</script>
