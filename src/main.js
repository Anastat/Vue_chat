import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login },
    {path: '/signUp', component: SignUp }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
