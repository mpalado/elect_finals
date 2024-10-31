import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import IntroPage from './components/IntroPage.vue';
import QuestionFirst from './components/QuestionFirst.vue';
import QuestionsSec from './components/QuestionsSec.vue';
import QuestionsThrid from './components/QuestionsThrid.vue';
import QuestionsFourt from './components/QuestionsFourt.vue';
import QuestionsFifth from './components/QuestionsFifth.vue';
import QuestionsSix from './components/QuestionsSix.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/intro',
    name: 'IntroPage',
    component: IntroPage,
  },
  {
    path: '/first',
    name: 'QuestionFirst',
    component: QuestionFirst,
  },
  {
    path: '/sec',
    name: 'QuestionsSec',
    component: QuestionsSec,
  },
  {
    path: '/third',
    name: 'QuestionsThrid',
    component: QuestionsThrid,
  },
  {
    path: '/fourt',
    name: 'QuestionsFourt',
    component: QuestionsFourt,
  },
  {
    path: '/fifth',
    name: 'QuestionsFifth',
    component: QuestionsFifth,
  },
  {
    path: '/six',
    name: 'QuestionsSix',
    component: QuestionsSix,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
