<template>
  <p>{{ user , count }}</p>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'

const count =ref(0)
const user = reactive({name: 'a', age:20})
</script>

<style scoped>

</style>