<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">首页</NuxtLink></li>
        <li><NuxtLink to="/about">关于</NuxtLink></li>
        <li><NuxtLink to="/posts/1">帖子 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">帖子 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
