import { createRouter, createWebHistory } from 'vue-router';
import HtmlQuiz from '../views/HtmlQuiz.vue';
import CssQuiz from '../views/CssQuiz.vue';
import JavaScriptQuiz from '../views/JavaScriptQuiz.vue';

const routes = [
 {
    path: '/html-quiz',
    name: 'HtmlQuiz',
    component: HtmlQuiz
 },
 {
    path: '/css-quiz',
    name: 'CssQuiz',
    component: CssQuiz
 },
 {
    path: '/javascript-quiz',
    name: 'JavaScriptQuiz',
    component: JavaScriptQuiz
 }
];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
});

export default router;
