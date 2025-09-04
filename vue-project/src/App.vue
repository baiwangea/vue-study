<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
const getMessage = (message: string) => {
  console.log('message',  message)
}
// 设置为暗黑主题
document.body.setAttribute('arco-theme', 'dark')
</script>

<template>
  <HelloWorld @getSonMessage="getMessage" msg="Vite + Vue" />
</template>

<style scoped>

</style>
