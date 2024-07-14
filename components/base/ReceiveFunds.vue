<script setup lang="ts">
defineProps<{
  name: string
  specificSymbol: string
}>()
</script>

<template>
  <div class="py-4 flex flex-col gap-y-12 items-center">
    <div class="flex flex-col gap-y-2">
      <h1 class="px-5 text-3xl font-semibold text-center">Your {{ name }} Address</h1>
      <p class="px-3 text-base text-center">Send only <span class="font-semibold">{{ specificSymbol }}</span> to this address. Sending other assets, such as jettons or NFTs will result in permanent loss.</p>
    </div>
    <div class="w-[80%] flex flex-col gap-y-2">
      <div class="p-5 rounded-[32px] flex flex-col gap-y-3 bg-white">
        <img src="~/assets/images/usdt-code.png" alt="usdt code">
        <p class="text-base leading-5 text-[#9c9c9c] text-center">Scan QR with camera to send USDT to your wallet.</p>
      </div>
      <div class="p-5 rounded-[32px] flex flex-col gap-y-1.5 bg-white">
        <p class="text-base leading-5 text-[#9c9c9c] text-center">Your USDT TRC20 address</p>
        <p class="break-words text-center">TTFLVFrQcDEPwaNof12hgcL9PE25pJH42T</p>
        <button class="w-full py-2 rounded-[32px] text-white font-medium bg-[#007BFF] hover:brightness-90 base-transition">Copy Address</button>
      </div>
    </div>
  </div>
</template>