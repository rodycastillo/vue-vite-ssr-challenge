export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/recharges',
    name: 'Recharges',
    component: () => import('../views/Recharges.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/Error.vue'),
    meta: {
      requiresAuth: false,
    }
  }
]


// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });


// // router.beforeEach(async (to, from, next) => {
// //   console.log("Starting")
// // })

// export default router;