import { createWebHistory, createRouter } from 'vue-router'

import Mood from './components/Mood.vue'
import Drink from './components/Drink.vue'

const routes = [
  { path: '/', component: Mood },
  { path: '/drink/:id', component: Drink },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
