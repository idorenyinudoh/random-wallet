<script setup lang="ts">
const receiveData = {
  name: 'Tether',
  specificSymbol: 'USDT TRC20'
}
</script>

<template>
  <BaseReceiveFunds :="receiveData" />
</template>