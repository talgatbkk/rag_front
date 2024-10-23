import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import Chat from './components/Chat.vue'
import About from './components/About.vue'
import TaxDeclaration from './components/TaxDeclaration.vue'
import i18n from './i18n'
import '../styles.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/chat', name: 'Chat', component: Chat },
    { path: '/about', name: 'About', component: About },
    { path: '/tax-declaration', name: 'TaxDeclaration', component: TaxDeclaration },
  ]
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
