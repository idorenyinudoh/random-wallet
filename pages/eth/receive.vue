<script setup lang="ts">
const receiveData = {
  name: 'Ethereum',
  specificSymbol: 'ETH'
}
</script>

<template>
  <BaseReceiveFunds :="receiveData" />
</template>