<script setup lang="ts">
import type { CurrencyInterface } from '~/utils/types'

defineProps<CurrencyInterface>()
</script>

<template>
  <NuxtLink :to="url" class="py-2 px-3 rounded-2xl flex justify-between items-center bg-white hover:brightness-90 base-transition">
    <div class="flex gap-x-1 items-center">
      <img :src="icon" :alt="name.toLocaleLowerCase()" class="w-12 h-12">
      <div class="flex flex-col items-start">
        <p class="text-lg font-medium leading-5 capitalize">{{ name }}</p>
        <p class="text-sm font-normal text-[#9c9c9c]">${{ priceInUSD }}</p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <p class="text-lg font-medium leading-5">${{ ownershipUSDValue }}</p>
      <p class="text-sm font-normal text-[#9c9c9c]">{{ ownership }} {{ symbol }}</p>
    </div>
  </NuxtLink>
</template>