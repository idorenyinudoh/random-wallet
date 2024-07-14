<script setup lang="ts">
const pageData = {
  name: 'Tether',
  symbol: 'USDT',
  ownership: 0.00,
  priceInUSD: 0.00,
  icon: '/icons/usdt.svg',
  descriptionTitle: 'Dollars in Wallet is USDT',
  descriptionContent: 'Dollars in Wallets stand for USDT (Tether) cryptocurrency as its price always roughly equals to US dollar.'
}
</script>

<template>
  <TheCurrencyPage :="pageData" />
</template>