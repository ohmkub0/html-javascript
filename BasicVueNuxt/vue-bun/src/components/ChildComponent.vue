<template>
 <h1>Childcomponent</h1>
 <h1>{{ message }}</h1>
 <p>name:{{ userinfo.name }}</p>
 <p>age:{{ userinfo.age }}</p>
 <p>email:{{ userinfo.email }}</p>
 <button @click="sentDataToParent">SentData to parent</button> <br>
 </template>

<script setup lang="ts">
 import { inject, onUnmounted, defineEmits } from 'vue';

 let timer = setInterval(() => {
    console.log('Interval running....')
 },1000)

 onUnmounted(() => {
    clearInterval(timer)
    console.log('Child component is cleared')
 })

const message = inject('message')

const userinfo = inject('userinfo')

const emits = defineEmits(['sentData','sentData2'])

function sentDataToParent(){
   // emits('sentData', 'Hello from Child component')
   const data = {
   message: 'Deekub',
   timestamp: new Date(),
   count: 32
}
   emits('sentData', data)
}



</script>

<style scoped>

</style>