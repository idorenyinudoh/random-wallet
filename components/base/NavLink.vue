<script setup lang="ts">
import type { BaseNavLinkInterface } from '~/utils/types'

defineProps<BaseNavLinkInterface>()
</script>

<template>
  <NuxtLink :to="url" class="py-4 px-3 rounded-2xl flex justify-between items-center bg-white hover:brightness-90 base-transition">
    <div class="flex gap-x-3 items-center">
      <div class="w-12 h-12 rounded-full flex justify-center items-center" :style="{ backgroundColor: iconBackground }">
        <img :src="icon" :alt="icon.split('/')[2].split('.svg')[0]" class="w-7 h-7">
      </div>
      <div class="flex flex-col items-start gap-y-[1px]">
        <p class="text-lg font-medium leading-5 capitalize">{{ title }}</p>
        <p v-if="description" class="text-sm font-normal text-[#9c9c9c]">{{ description }}</p>
      </div>
    </div>
    <div>
      <img src="/icons/chevron-right.svg" alt="chevron right" class="w-6 h-6">
    </div>
  </NuxtLink>
</template>