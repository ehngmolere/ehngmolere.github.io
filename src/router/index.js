import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/HomeVue.vue";
import Skills from "@/views/SkillsVue.vue";
import Interests from "@/views/InterestsVue.vue";
import Experiences from "@/views/ProfessionalExperiences.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    meta: { title: 'Skills' }
  },
  {
    path: '/interests',
    name: 'interests',
    component: Interests,
    meta: { title: 'Interests' }
  },
  {
    path: '/interest',
    redirect: '/interests'
  },
  {
    path: '/books',
    redirect: '/interests'
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: Experiences,
    meta: { title: 'Experiences' }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Emeric Molère'
})

export default router

