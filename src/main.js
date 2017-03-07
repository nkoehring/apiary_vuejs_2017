import Vue from 'vue'
import Filters from './filters'

import App from './App'

Vue.use(Filters)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
