<script setup lang="ts">
const props = defineProps<{
  name: string
  symbol: string
  ownership: number
  priceInUSD: number
  icon: string
  descriptionTitle: string
  descriptionContent: string
}>()

const actionLinks: ActionLinkInterface[] = [
  {
    url: '/send',
    icon: '/icons/arrow-up.svg',
    action: 'Send',
    size: 'regular',
    isButton: true
  },
  {
    url: `/${props.symbol.toLocaleLowerCase()}/receive`,
    icon: '/icons/arrow-down.svg',
    action: 'Receive',
    size: 'regular'
  },
  {
    url: '/add',
    icon: '/icons/plus.svg',
    action: 'Add',
    size: 'regular'
  },
  {
    url: '/swap',
    icon: '/icons/arrow-left-right.svg',
    action: 'Swap',
    size: 'big'
  }
]

const transactionHistoryData: BaseNavLinkInterface = {
  title: 'Transaction history',
  icon: '/icons/list-check.svg',
  iconBackground: '#969EA7',
  url: `/${props.symbol.toLocaleLowerCase()}/history`
}

const addModalIsVisible = ref(false)

const onActionLinkClick = (index: number) => {
  if (index === 0) {
    addModalIsVisible.value = true
  }
}
</script>

<template>
  <div>
    <div class="border-b border-solid border-[#E5E7EB] px-4 pb-4 grid grid-cols-2 justify-between items-start">
      <div>
        <p class="text-2xl font-medium">{{ name }}</p>
        <p class="text-xl font-medium">${{ priceInUSD }}</p>
        <p class="text-sm font-normal text-[#9c9c9c]">{{ priceInUSD }} {{ symbol }}</p>
      </div>
      <div class="w-20 h-20 justify-self-end">
        <img :src="icon" :alt="name.toLocaleLowerCase()" class="w-full h-full">
      </div>
    </div>
    <div class="py-5 flex flex-col gap-y-5">
      <div class="flex gap-x-6 items-center justify-center">
        <BaseActionLink v-for="(action, index) in actionLinks" :key="index" :="action" @click="onActionLinkClick(index)" />
      </div>
      <BaseNavLink :="transactionHistoryData" />
      <div class="py-4 px-3 rounded-2xl bg-white">
        <p>{{ descriptionTitle }}</p>
        <br>
        <p>{{ descriptionContent }}</p>
      </div>
    </div>
    <AddModal v-if="addModalIsVisible" @close="addModalIsVisible = false" />
  </div>
</template>