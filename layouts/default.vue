<script setup lang="ts">
const route = useRoute()

const routeName = computed(() => {
  return route.name
})
</script>

<template>
  <div class="min-h-screen flex justify-center items-center bg-[#F5FAFE]">
    <div class="relative w-full sm:max-w-96 min-h-screen sm:min-h-[600px] sm:rounded-[32px] sm:border sm:border-solid sm:border-gray-300 shadow-[0px_8px_40px_0px_rgba(2,152,252,0.10)] px-4 py-5 flex flex-col gap-y-4 bg-[#F0EFF466]">
      <div class="grid grid-cols-3 items-center">
        <button v-if="routeName !== 'index'" class="w-max pl-2 pr-4 py-2 rounded-xl hover:bg-[#017AFE]/10 flex items-center" @click="$router.go(-1)">
          <img src="/icons/chevron-left.svg" alt="chevron left" class="w-5 h-5">
          <p class="text-base font-normal">back</p>
        </button>
        <p class="col-start-2 text-base font-normal text-center">random wallet</p>
      </div>
      <slot />
    </div>
  </div>
</template>