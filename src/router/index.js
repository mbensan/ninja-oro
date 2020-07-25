import Vue from 'vue';
import VueRouter from 'vue-router';

// importamos los componentes que deseamos tengan su propia página
import NinjaOro from '@/components/NinjaOro.vue';
import Users from '@/components/Users.vue';
import ListaUsuarios from '@/components/ListaUsuarios.vue'
import NotFound from '@/components/NotFound.vue'
import UserResume from '@/components/UserResume.vue'
import UserInterests from '@/components/UserInterests.vue'

Vue.use(VueRouter);   // instalamos explícitamente el router

export default new VueRouter({
  routes: [
    {
      path: '/', 
      component: NinjaOro
    },
    {
      path: '/users/todos',
      component: ListaUsuarios
    },
    {
      path: '/users/:nombre',
      component: Users,
      // aquí colocamos las rutas anidadas
      children: [
        {
          path: '/',
          component: UserResume
        },
        {
          path: 'interests',
          component: UserInterests
        }
      ]
    },
    // La ruta 404 SIEMPRE va al final
    {
      path: '*',
      component: NotFound
    }
  ]
})