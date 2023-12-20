<template>
  <router-link :to="to">
    <div
      class="w-full p-3 bg-[#f4f5f6] rounded-xl flex items-center hover:transition-all hover:duration-500 opacity-[.4] hover:opacity-[1] cursor-pointer grayscale hover:grayscale-0"
    >
      <span
        class="bg-[#f18745] px-[.5px] py-1 rounded-[5px] block mr-3 text-white material-symbols-outlined"
      >
        {{ icon }}
      </span>
      <p>{{ name }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardMethod",
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>
