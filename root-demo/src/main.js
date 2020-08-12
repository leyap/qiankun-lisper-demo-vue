import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps(
  [
    {
      name: 'app1',
      entry: '//localhost:9510',
      container: '#container',
      activeRule: '/child1',
      props: {
        name: 'child1 value'
      }
    },
    {
      name: 'app2',
      entry: '//localhost:9511',
      container: '#container',
      activeRule: '/child2',
      props: {
        name: 'chcild2 value'
      }
    }
  ],
  {
    beforeLoad: app => console.log('before load', app.name),
    beforeMount: [
      app => console.log('before mount', app.name)
    ]
  }
)

start()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
