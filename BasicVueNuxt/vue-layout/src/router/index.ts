import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
  path:'/',
  name: 'Home',
  component: Home,
  meta: {
    title:'Home'
  }
  },
  {
  path:'/about',
  name: 'About',
  component: About,
  meta: {
    title:'About'
  }
  },
  {
  path:'/contact',
  name: 'Contact',
  component: Contact,
  meta: {
    title: 'Contact'
  }
  },
]

  const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if(typeof to.meta.title == 'string'){
    document.title = to.meta.title
  }
  next()
})

export default router
