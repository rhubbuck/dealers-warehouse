import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import CreateCustomerView from '../views/CreateCustomerView.vue'
import UpdateCustomerView from '@/views/UpdateCustomerView.vue'
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/create-customer',
      name: 'create-customer',
      component: CreateCustomerView,
    },
    {
      path: '/update-customer/:id',
      name: 'update-customer',
      component: UpdateCustomerView,
    }
  ],
})

// Redirect non-authenticated users to the login screen
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  await authStore.getUser()
  const token = localStorage.getItem('token')

  if (token || to.name === 'login') {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router