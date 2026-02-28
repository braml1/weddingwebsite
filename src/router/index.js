import { createRouter, createWebHistory } from 'vue-router'
import { useDataStore } from '@/stores/DataStore'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
      path: '/',
      redirect: '/en'
    },
    {
      path: '/:lang(en|es|nl)',
      name: 'home',
      component: () => import('../views/Home.vue'),
    }
  ]


})

  router.beforeEach((to, from, next) => {
    const dataStore = useDataStore()
    const lang = to.params.lang

    if (lang && ['es', 'en', 'nl'].includes(lang)) {
      console.log(lang)

      dataStore.setLanguage(lang)
    } else {
      console.log("jow")
      dataStore.setLanguage('en')
    }

    next()
  })

export default router
