import Vue from 'vue';
import VueRouter from 'vue-router';

// importamos los componentes que deseamos tengan su propia página
import NinjaOro from '@/components/NinjaOro.vue';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
  routes: [
    {
      path: '/', 
      component: NinjaOro
    },
    {
      path: '/hello',
      component: HelloWorld
    }
  ]
})