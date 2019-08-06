import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import reactiveStorage from "vue-reactive-storage";
Vue.use(reactiveStorage, {
  "accounts": []
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
