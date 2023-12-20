<template>
  <div
    class="w-full flex justify-between items-center border-b border-solid border-[#f4f5f6] p-4 hover:transition-all hover:duration-500 opacity-[.4] hover:opacity-[1] grayscale hover:grayscale-0 cursor-pointer"
  >
    <div class="flex flex-row items-center">
      <img
        :src="img"
        :alt="`${company} | Company`"
        class="w-[20px] h-auto max-h-5"
      />
      <p class="ml-3 text-base">{{ company }}</p>
    </div>
    <span
      class="material-symbols-outlined cursor-pointer hover:text-yellow-400 hover:transition-all hover:duration-400 hover:scale-[1.2]"
    >
      kid_star
    </span>
  </div>
</template>

<script>
export default {
  name: "CardCompany",
  props: {
    img: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    company: {
      type: String,
      required: true,
      default: "Company",
    },
  },
};
</script>
