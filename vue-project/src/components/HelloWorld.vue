<template>
  <div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <!-- 建议添加一个按钮来调用 changeUserInfo，否则该函数未被使用 -->
    <button @click="changeUserInfo">增加年龄</button>

    <p>消息：{{ msg }}</p>
    <p>数值：{{ count }}</p>
    <button @click="changeCount"> 修改</button>

    <button @click="sendMessage"> 发送</button>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, toRefs, watch, onMounted} from "vue";
import axios from "axios";

// 建议将 API 调用放在 onMounted 钩子中，以避免在模块加载时产生副作用
// 并且可以更好地控制请求时机
onMounted(() => {
  axios.get('/user?ID=12345')
      .then(function (response) {
        // 成功处理
        console.log(response);
      })
      .catch(function (error) {
        // 错误处理
        console.log(error);
      })
      .finally(function () {
        // 总是执行
      });
});

const userInfo = reactive({
  name: '张三',
  age: 18
})
const count = ref(0)
function changeCount() {
  count.value++
}
const {name, age} = toRefs(userInfo)

// 这个函数之前未被使用，建议在模板中添加一个触发器，比如一个按钮
const changeUserInfo = () => {
  age.value += 3;
}

watch(count, (newValue, oldValue) => {
  console.log(`count发生变化，旧值：${oldValue}，新值：${newValue}`);
})

// 使用 TypeScript 增强 props 类型定义
const props = defineProps<{
  msg: string
}>()

// 使用 TypeScript 增强 emits 类型定义
const emit = defineEmits<{
  (e: 'getSonMessage', message: string): void
}>()

const sendMessage = () => {
  emit('getSonMessage', '这是子组件发送的消息')
}

</script>

<style lang="scss" scoped>

</style>