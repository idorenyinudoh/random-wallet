<script setup lang="ts">
import type { BaseNavLinkInterface } from '~/utils/types'

const links: BaseNavLinkInterface[] = [
  {
    title: 'P2P Market',
    description: 'Buy without intermediaries',
    icon: '/icons/store.svg',
    iconBackground: '#27ABF7',
    url: '/p2p'
  },
  {
    title: 'External Wallet',
    description: 'Receive from another wallet',
    icon: '/icons/qr-code.svg',
    iconBackground: '#969EA7',
    url: '/add'
  }
]
</script>

<template>
  <div class="py-4 flex flex-col gap-y-12">
    <h1 class="px-5 text-3xl font-semibold text-center">How do you want to add crypto?</h1>
    <div class="flex flex-col gap-y-2">
      <BaseNavLink v-for="(link, index) in links" :key="index" :="link" />
    </div>
  </div>
</template>