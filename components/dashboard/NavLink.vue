<script setup lang="ts">
import type { NavLinkInterface } from '~/utils/types'

defineProps<NavLinkInterface>()
</script>

<template>
  <NuxtLink :to="url">
    <button class="p-2 rounded-full bg-[#E0DFE5] hover:brightness-90 base-transition">
      <img :src="icon" :alt="url.split('/')[1]" class="w-6 h-6"/>
    </button>
  </NuxtLink>
</template>