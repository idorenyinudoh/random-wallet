<script setup lang="ts">
const pageData = {
  name: 'Ripple',
  symbol: 'XRP',
  ownership: 0.00,
  priceInUSD: 0.00,
  icon: '/icons/xrp.svg',
  descriptionTitle: 'XRP in Wallet',
  descriptionContent: 'XRP is a cryptocurrency and native token of XRP Ledger, an open-source blockchain. The cryptocurrency and blockchain are designed to enhance global financial transfers and the exchange of several currencies.'
}
</script>

<template>
  <TheCurrencyPage :="pageData" />
</template>