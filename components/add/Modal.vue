<script setup lang="ts">
defineEmits(['close'])
</script>

<template>
  <div class="absolute inset-0 w-full h-full sm:rounded-[32px] bg-[#78777A]/40 flex justify-center items-center" @click.self="$emit('close')">
    <div class="w-[80%] rounded-3xl bg-[#FEFEFE]">
      <p class="px-6 pt-6 pb-4 text-center font-medium">Your wallet is empty. Would you like to buy some crypto?</p>
      <div class="border-t border-solid border-[#E5E7EB] grid grid-cols-2 justify-between items-center divide-x-[1px]">
        <button class="py-3 rounded-bl-[32px] text-[#017AFE]" @click="$emit('close')">Cancel</button>
        <button class="py-3 rounded-br-[32px] text-[#017AFE] font-medium" @click="$router.push('/add')">OK</button>
      </div>
    </div>
  </div>
</template>