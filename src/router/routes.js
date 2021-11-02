
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', 
      component: () => import('src/pages/PageToDo.vue') 
      },
      { path: '/settings', 
      component: () => import('src/pages/PageSettings.vue') 
      },
      { path: '/settings/help', 
      component: () => import('src/pages/PageHelp.vue') 
      },
      { path: '/auth', 
      component: () => import('src/pages/PageAuth.vue') 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it

]

export default routes
