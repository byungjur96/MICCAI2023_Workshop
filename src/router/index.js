import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/organization',
    name: 'Organization',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrganizationView.vue')
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/ProgramView.vue')
  },
  {
    path: '/keynote',
    name: 'Keynote',
    component: () => import('../views/KeynoteView.vue')
  },
  {
    path: '/submission',
    name: 'Submission',
    component: () => import('../views/SubmissionView.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
