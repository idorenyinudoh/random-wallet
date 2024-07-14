<script setup lang="ts">
const receiveData = {
  name: 'BNB',
  specificSymbol: 'Binance BNB'
}
</script>

<template>
  <BaseReceiveFunds :="receiveData" />
</template>