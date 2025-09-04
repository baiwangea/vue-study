<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <h1>欢迎来到首页</h1>
    <AppAlert>
      这是一个自动导入的组件
    </AppAlert>
  </div>
</template>

<style scoped>

</style>
