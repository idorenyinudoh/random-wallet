<script setup lang="ts">
const payInput = ref(0)
const receiveInput = ref(0)

const currencies = [
  {
    icon: '/icons/usdt.svg',
    symbol: 'USDT',
    rateToUSD: 0
  },
  {
    icon: '/icons/bitcoin.svg',
    symbol: 'BTC',
    rateToUSD: 0
  },
  {
    icon: '/icons/eth.svg',
    symbol: 'ETH',
    rateToUSD: 0
  },
  {
    icon: '/icons/bnb.svg',
    symbol: 'BNB',
    rateToUSD: 0
  }
]

const payCurrencyIndex = ref(0)
const receiveCurrencyIndex = ref(1)
const paySelect = ref('')
const receiveSelect = ref('')

const onSelectChange = (currency: string, value: string) => {
  if (currency === 'pay') {
    payCurrencyIndex.value = currencies.findIndex((currency) => currency.symbol === value)
  } else {
    receiveCurrencyIndex.value = currencies.findIndex((currency) => currency.symbol === value)
  }
}

const swapCurrencies = () => {
  const initialPayCurrencyIndex = payCurrencyIndex.value
  const initialReceiveCurrencyIndex = receiveCurrencyIndex.value

  payCurrencyIndex.value = initialReceiveCurrencyIndex
  receiveCurrencyIndex.value = initialPayCurrencyIndex
}

watch([payCurrencyIndex, receiveCurrencyIndex], ([newPayCurrencyIndex, newReceiveCurrencyIndex]) => {
  paySelect.value = currencies[newPayCurrencyIndex].symbol
  receiveSelect.value = currencies[newReceiveCurrencyIndex].symbol
})

onMounted(() => {
  paySelect.value = currencies[payCurrencyIndex.value].symbol
  receiveSelect.value = currencies[receiveCurrencyIndex.value].symbol
})
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="divide-y-2">
      <div class="relative py-6 flex flex-col gap-y-1">
        <div class="flex justify-between items-center">
          <div class="flex gap-x-2 items-center">
            <div class="border border-solid border-black p-1.5 rounded-full">
              <img :src="currencies[payCurrencyIndex].icon" :alt="currencies[payCurrencyIndex].symbol" class="w-6 h-6">
            </div>
            <p>You pay</p>
          </div>
          <div>
            <p class="text-[#9c9c9c]"><span class="text-[#007BFF]">Max:</span> 0 {{ currencies[payCurrencyIndex].symbol }}</p>
          </div>
        </div>
        <div class="grid grid-cols-2 justify-between items-end">
          <input v-model="payInput" type="number" class="text-6xl font-semibold bg-transparent outline-none appearance-none m-0">
          <div class="relative pb-2">
            <select v-model="paySelect" class="text-5xl font-medium appearance-none bg-transparent text-[rgba(199,198,201,1)] pr-14 cursor-pointer outline-none" @change="onSelectChange('pay', $event.target.value)">
              <option value="USDT">USDT</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="BNB">BNB</option>
            </select>
            <img src="/icons/chevron-right.svg" alt="chevron right" class="absolute -top-2 bottom-0 right-0 my-auto w-14 pointer-events-none">
          </div>
        </div>
        <p class="text-[#9c9c9c]">{{ payInput }} {{ currencies[payCurrencyIndex].symbol }} ≈ {{ payInput }} {{ currencies[receiveCurrencyIndex].symbol }}</p>
        <button class="absolute right-5 -bottom-5 w-10 h-10 rounded-full flex justify-center items-center bg-[#E4F1FF] hover:brightness-90 base-transition" @click="swapCurrencies">
          <img src="/icons/arrow-up-down.svg" alt="arrow up down" class="w-6 h-6">
        </button>
      </div>
      <div class="py-6 flex flex-col gap-y-1">
        <div class="flex gap-x-2 items-center">
          <div class="border border-solid border-black p-1.5 rounded-full">
            <img :src="currencies[receiveCurrencyIndex].icon" :alt="currencies[receiveCurrencyIndex].symbol" class="w-6 h-6">
          </div>
          <p>You receive</p>
        </div>
        <div class="grid grid-cols-2 justify-between items-end">
          <input v-model="receiveInput" type="number" class="text-6xl font-semibold bg-transparent outline-none">
          <div class="relative pb-2">
            <select v-model="receiveSelect" class="text-5xl font-medium appearance-none bg-transparent text-[rgba(199,198,201,1)] pr-14 cursor-pointer outline-none" @change="onSelectChange('receive', $event.target.value)">
              <option value="USDT">USDT</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="BNB">BNB</option>
            </select>
            <img src="/icons/chevron-right.svg" alt="chevron right" class="absolute -top-2 bottom-0 right-0 my-auto w-14 pointer-events-none">
          </div>
        </div>
        <!-- <p class="text-[#9c9c9c]">1 {{ currencies[payCurrencyIndex].symbol }} ≈ 1 {{ currencies[receiveCurrencyIndex].symbol }}</p> -->
      </div>
    </div>
    <button class="mt-10 w-full py-3 rounded-xl text-base font-medium bg-[#017AFE] text-white hover:brightness-90 base-transition">REVIEW DETAILS</button>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
  -moz-appearance:textfield;
}
</style>