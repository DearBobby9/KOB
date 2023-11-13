import { createRouter, createWebHistory } from 'vue-router'
import PkindexView from '../views/pk/PkindexView.vue'
import RecordindexView from '../views/record/RecordindexView.vue'
import RanklistindexView from '../views/ranklist/RanklistindexView.vue'
import BotindexView from '../views/bot/BotindexView.vue'
import ErrorindexView from '../views/error/ErrorindexView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkindexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordindexView,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistindexView,
  },
  {
    path: "/userbot/",
    name: "user_bot_index",
    component: BotindexView,
  },
  {
    path: "/404/",
    name: "error_index",
    component: ErrorindexView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
