<script setup lang="ts">
const pageData = {
  name: 'Ethereum',
  symbol: 'ETH',
  ownership: 0.00,
  priceInUSD: 0.00,
  icon: '/icons/eth.svg',
  descriptionTitle: 'Ethereum in Wallet is ETH',
  descriptionContent: 'Ethereum is a decentralized blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform.'
}
</script>

<template>
  <TheCurrencyPage :="pageData" />
</template>