<script setup lang="ts">
import type { ActionLinkInterface } from '~/utils/types'

defineProps<ActionLinkInterface>()
</script>

<template>
  <NuxtLink :to="url" class="p-2 flex flex-col gap-y-1 items-center rounded-xl hover:bg-[#017AFE]/10 base-transition">
    <div :class="['rounded-full bg-[#017AFE]', size === 'regular' ? 'p-1': 'p-1.5']">
      <img :src="icon" :alt="icon.split('/')[2].split('.svg')[0]" :class="[size === 'regular' ? 'w-6 h-6': 'w-5 h-5']"/>
    </div>
    <p class="text-base font-medium text-[#017AFE]">{{ action }}</p>
  </NuxtLink>
</template>