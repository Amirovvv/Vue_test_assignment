import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import('../views/Task.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
