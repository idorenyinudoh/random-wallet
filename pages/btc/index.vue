<script setup lang="ts">
const pageData = {
  name: 'Bitcoin',
  symbol: 'BTC',
  ownership: 0.00,
  priceInUSD: 0.00,
  icon: '/icons/bitcoin.svg',
  descriptionTitle: 'Bitcoin in Wallet is BTC',
  descriptionContent: 'Bitcoin is the pioneer of cryptocurrencies, launched in 2009.'
}
</script>

<template>
  <TheCurrencyPage :="pageData" />
</template>