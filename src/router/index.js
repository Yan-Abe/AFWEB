import Vue from 'vue'
import VueRouter from 'vue-router'
import Card from '@/components/Card'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () =>  import( '../views/Inicio.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () =>  import( '../views/Perfil.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () =>  import( '../views/Contato.vue')
  },
  {
    path: '/foto',
    name: 'Foto',
    component: () =>  import( '../views/Foto.vue')
    
  },
  {
    path: '/:cardId',
    name: 'Card',
    component: Card
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
