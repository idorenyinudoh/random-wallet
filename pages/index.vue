<script setup lang="ts">
import type { ActionLinkInterface, CurrencyInterface, NavLinkInterface } from '~/utils/types'

const headerActions: NavLinkInterface[] = [
  {
    url: '/settings',
    icon: '/icons/settings.svg'
  },
  {
    url: '/scan',
    icon: '/icons/qr-scan.svg'
  }
]

const actionLinks: ActionLinkInterface[] = [
  {
    url: '/send',
    icon: '/icons/arrow-up.svg',
    action: 'Send',
    size: 'regular',
    isButton: true
  },
  {
    url: '/add',
    icon: '/icons/plus.svg',
    action: 'Add',
    size: 'regular'
  },
  {
    url: '/swap',
    icon: '/icons/arrow-left-right.svg',
    action: 'Swap',
    size: 'big'
  },
  {
    url: '/p2p',
    icon: '/icons/store.svg',
    action: 'P2P',
    size: 'big'
  }
]

const currencies: CurrencyInterface[] = [
  {
    url: '/usdt',
    icon: '/icons/usdt.svg',
    name: 'tether',
    priceInUSD: 0.00,
    ownership: 0,
    symbol: 'USDT',
    ownershipUSDValue: 0.00
  },
  {
    url: '/btc',
    icon: '/icons/bitcoin.svg',
    name: 'bitcoin',
    priceInUSD: 0.00,
    ownership: 0,
    symbol: 'BTC',
    ownershipUSDValue: 0.00
  },
  {
    url: '/eth',
    icon: '/icons/eth.svg',
    name: 'ethereum',
    priceInUSD: 0.00,
    ownership: 0,
    symbol: 'ETH',
    ownershipUSDValue: 0.00
  },
  {
    url: '/bnb',
    icon: '/icons/bnb.svg',
    name: 'BNB',
    priceInUSD: 0.00,
    ownership: 0,
    symbol: 'BNB',
    ownershipUSDValue: 0.00
  }
]

const transactionHistoryData: BaseNavLinkInterface = {
  title: 'Transaction history',
  icon: '/icons/list-check.svg',
  iconBackground: '#969EA7',
  url: '/history'
}

const addModalIsVisible = ref(false)

const onActionLinkClick = (index: number) => {
  if (index === 0) {
    addModalIsVisible.value = true
  }
}
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <nav class="flex justify-between items-center">
      <DashboardNavLink v-for="(action, index) in headerActions" :key="index" :="action" />
    </nav>
    <main class="flex flex-col gap-y-4">
      <section class="flex flex-col items-center">
        <h1 class="text-lg font-normal">Total balance</h1>
        <p class="text-4xl font-medium">$0.00</p>
      </section>
      <div class="mt-5 flex gap-x-6 items-center justify-center">
        <BaseActionLink v-for="(action, index) in actionLinks" :key="index" :="action" @click="onActionLinkClick(index)" />
      </div>
      <div class="flex flex-col gap-y-2">
        <DashboardCurrencyLink v-for="(currency, index) in currencies" :key="index" :="currency" />
      </div>
      <BaseNavLink :="transactionHistoryData" class="my-3" />
    </main>
    <AddModal v-if="addModalIsVisible" @close="addModalIsVisible = false" />
  </div>
</template>