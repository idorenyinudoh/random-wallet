<script setup lang="ts">
const pageData = {
  name: 'Binance coin',
  symbol: 'BNB',
  ownership: 0.00,
  priceInUSD: 0.00,
  icon: '/icons/bnb.svg',
  descriptionTitle: 'BNB in Wallet',
  descriptionContent: 'Binance coin (BNB) is the exchange token of the Binance crypto exchange. It was launched originally on the Ethereum blockchain but later migrated to the Binance Smart Chain, now called BNB Chain.'
}
</script>

<template>
  <TheCurrencyPage :="pageData" />
</template>