<template>
  <div>
    
    <h1>Counter: {{ count }}</h1>
    <button @click="count++">+</button>
    <button @click="count--">-</button> <br>
    <button @click="count = 0">reset</button>
    
    <h1>{{ user.name + user.age}}</h1>
    <h1>{{ myuser.name}} {{ myuser.age }}</h1>

    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    
    <h1>Double: {{ double }}</h1>

     <ChildComponent v-if="showChild" @sentData="handleDataFromChild"/>
     <button @click="showChild = !showChild">Toggle Child</button>
    
    <h1>Counter from Component: {{ counter }}</h1>
    <button @click="increment">+</button> <br>

    <h1>Input Element</h1>
    <input ref="inputElement" type="text">


  </div>
</template>

<script setup lang="ts">
 import {ref, reactive, computed, watch, watchEffect, onMounted, onUpdated, onUnmounted, provide} from 'vue'

 import  ChildComponent  from '@/components/ChildComponent.vue'

 import { useCounter } from './composables/uesCounter'

 const count = ref(0)

 const myuser = ref({
  name: 'Jane Nie',
  age: 21
})

 const items = ref([1,2,3,4,5])

 const showChild = ref(true)

 const user = reactive({
  name: 'Jo Do',
  age: 22
 })

 const double = computed(() => count.value * 2) 

 watch(() => count.value, (newVal, oldVal)=>{
  console.log('count changed', newVal, oldVal)
 })
 watchEffect(() => {
  console.log('count changed by eff', count.value)
 })
 
 onMounted(()=>{
    console.log('component has been mounted')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

    inputElement.value?.focus()
 })

 onUpdated(() => {
  console.log('component has been update')
 })

 const {counter, increment} = useCounter()

 const inputElement = ref<HTMLInputElement | null>(null)

provide('message', 'Hello from parent ')

const users = reactive({
  name: 'Rpro Zing',
  age: 24,
  email: 'aasas@gmail.com'
})

provide('userinfo', users)

 /*function handleDataFromChild(data: string) {
 console.log('Data from Child component:', data)
 } */

type ChildData = {
  message: string
  timestamp: Date
  count: number
}

function handleDataFromChild(data: ChildData) {
  console.log('Data from Child component:', data)
  console.log('message:', data.message)
  console.log('timestamp:', data.timestamp)
  console.log('cont:', data.count)
} 


</script>

<style scoped>

</style>
