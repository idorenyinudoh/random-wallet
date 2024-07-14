<script setup lang="ts">
const currencies = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: 0,
    icon: '/icons/bitcoin.svg',
    url: '/bitcoin/receive'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    balance: 0,
    icon: '/icons/eth.svg',
    url: '/eth/receive'
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    balance: 0,
    icon: '/icons/bnb.svg',
    url: '/bnb/receive'
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    balance: 0,
    icon: '/icons/xrp.svg',
    url: '/xrp/receive'
  }
]

const selectedCurrencyIndex = ref(0)
</script>

<template>
  <div class="py-4 flex flex-col">
    <h1 class="mb-12 px-5 text-3xl font-semibold text-center">Choose asset to receive</h1>
    <div class="px-4 py-2 rounded-[32px] flex flex-col bg-white divide-y-[1px]">
      <button v-for="(currency, index) in currencies" :key="index" class="py-3 pr-3 flex justify-between items-center" @click="selectedCurrencyIndex = index">
        <div class="flex gap-x-2 items-center">
          <img :src="currency.icon" :alt="currency.name.toLocaleLowerCase()" class="w-12 h-12">
          <div class="flex flex-col items-start">
            <p class="text-xl font-medium leading-5">{{ currency.name }}</p>
            <p class="text-base font-normal text-[#9c9c9c]">{{ currency.balance }} {{ currency.symbol }}</p>
          </div>
        </div>
        <img v-if="index === selectedCurrencyIndex" src="/icons/check.svg" alt="check" class="w-7 h-7">
      </button>
    </div>
    <div class="mt-2">
      <p class="text-sm leading-4 text-[#9c9c9c]">Send only appropriate coins to these assets.</p>
      <p class="text-sm leading-4 text-[#9c9c9c]">Sending NFT or any other coins may result in permanent loss.</p>
    </div>
    <button class="mt-10 w-full py-3 rounded-xl text-base font-medium bg-[#017AFE] text-white hover:brightness-90 base-transition" @click="$router.push(currencies[selectedCurrencyIndex].url)">Continue</button>
  </div>
</template>