<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const count = ref(0)

const user = reactive({
  name: 'john',
  age: 20
})
const items = ref([1, 2, 3, 4])

const double = computed(() => count.value * 2)
</script>

<template>
  <h1>Counter: {{ count }}</h1>
  <button @click="count++">+</button>
  <button @click="count = 0">reset</button>

  <h1>{{user.name }}</h1>
 
    <li v-for="item in items":key="item">{{ item }}</li>
  <style scoped></style>
</template>
