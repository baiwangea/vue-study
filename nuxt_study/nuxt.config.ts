// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    // 仅在服务器端可用的私有键
    apiSecret: '123',
    // public 中的键也暴露给客户端
    public: {
      apiBase: '/api'
    }
  }
})
