import Vue from 'vue'
import VueRouter from 'vue-router'
import Frist from "../views/Frist";
import Second from "../views/Second";
import Third from "../views/Third";
import Four from "../views/Fourth";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Frist',
    component: Frist
  },
  {
    path:'/Second',
    name: 'Second',
    component: Second
  },
  {
    path: '/Third',
    name: 'Third',
    component: Third
  },
  {
    path: '/Four',
    name: 'Four',
    component: Four
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
