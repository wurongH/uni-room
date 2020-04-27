import Vue from 'vue'
import App from './App'
import header from './components/headr.vue'
import status from './components/status.vue'
import request from './utils/request.js'

Vue.config.productionTip = false
Vue.prototype.request = request

Vue.component('page-header', header)
Vue.component('page-status', status)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
