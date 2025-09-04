<script setup lang="ts">
const route = useRoute()

// 当访问 /posts/1 时，route.params.id 将为 1
console.log(route.params.id)
</script>
