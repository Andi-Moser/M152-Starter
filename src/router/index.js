import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page1 from '../views/Pages/Page1.vue'
import Aufgabe1 from '../views/Pages/Aufgabe1.vue'
import Aufgabe2 from '../views/Pages/Aufgabe2.vue'
import Aufgabe12_2 from '../views/Pages/Aufgabe12_2.vue'
import RWD from '../views/Pages/RWD.vue'
import Pseudoelemente from '../views/Pages/Pseudoelemente.vue'
import Kasse from '../views/Pages/Kasse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/page',
      name: 'Page 1',
      component: Page1,
    },
    {
      path: '/aufgabe1',
      name: 'Aufgabe 1',
      component: Aufgabe1,
    },
    {
      path: '/aufgabe2',
      name: 'Aufgabe 2',
      component: Aufgabe2,
    },
    {
      path: '/aufgabe12-2',
      name: 'Aufgabe 12.2',
      component: Aufgabe12_2,
    },
    {
      path: '/rwd',
      name: 'RWD',
      component: RWD,
    },
    {
      path: '/pseudo',
      name: 'Pseudo',
      component: Pseudoelemente,
    },
    {
      path: '/kasse',
      name: 'Kasse',
      component: Kasse,
    },
  ]
})

export default router
