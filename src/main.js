import Vue from 'vue'
import App from './App.vue'
import router from './router.vue'
import {bootstrap} from './bootstrap.vue'
Vue.config.productionTip = false
Vue.use(router)
export default new Vue({
  bootstrap,
  render: h => h(App),
}).$mount('#app')
