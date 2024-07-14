<script setup lang="ts">
const receiveData = {
  name: 'Bitcoin',
  specificSymbol: 'Bitcoin (BTC)'
}
</script>

<template>
  <BaseReceiveFunds :="receiveData" />
</template>