import ActionView from '@/views/ActionView.vue'
import AnimationView from '@/views/AnimationView.vue'
import ComedyView from '@/views/ComedyView.vue'
import DramaView from '@/views/DramaView.vue'
import HomeView from '@/views/HomeView.vue'
import MovieDetail from '@/views/MovieDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { 
      path: '/drama', 
      name: 'drama',
      component: DramaView,
    },
    {
      path: '/comedy',
      name: 'comedy',
      component: ComedyView,
    },
    {
      path: '/animation',
      name: 'animation',
      component: AnimationView,
    },
    {
      path: '/action',
      name: 'action',
      component: ActionView,
    },
    {
      path: '/movie/:id',
      name: 'movieDetail',
      component: MovieDetail,
    }
  ],
})

export default router
