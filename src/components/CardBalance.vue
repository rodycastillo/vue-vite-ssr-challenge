<template>
  <div class="py-8 border-b border-gray-500 border-solid">
    <div class="flex">
      <span class="block mr-3">Saldo virtual</span>
      <span
        class="block text-base cursor-pointer text-[#56b7b1] material-symbols-outlined"
      >
        info
      </span>
    </div>

    <div class="mt-3">
      <p class="text-xl font-bold flex items-center">
        S/ {{ balance }}
        <span
          class="block cursor-pointer ml-2 text-[#56b7b1] font-normal text-base material-symbols-outlined"
        >
          sync
        </span>
      </p>
      <p
        class="mt-2 flex border w-fit py-2 px-3 border-gray-500 border-solid rounded-2xl cursor-pointer hover:translate-y-[-1px] hover:transition-all hover:opacity-[.5] items-center"
      >
        <span class="block mr-2 material-symbols-outlined text-base">
          favorite
        </span>
        ¿Cómo recargar mi saldo virtual?
      </p>

      <p class="mt-3">
        Código para cargar tu saldo:
        <span class="text-[#56b7b1]">{12345678901}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardBalance",
  props: {
    balance: {
      type: String,
      required: true,
      default: "0000.00",
    },
  },
};
</script>
