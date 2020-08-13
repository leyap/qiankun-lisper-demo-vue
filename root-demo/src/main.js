import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerMicroApps, start, initGlobalState, runAfterFirstMounted } from 'qiankun'

registerMicroApps(
  [
    {
      name: 'app1',
      entry: '//localhost:9510',
      container: '#container',
      activeRule: '/child1',
      props: {
        data: {
          name: 'child1 value',
          age: 1234
        },
        myname: 'child1 value'
      }
    },
    {
      name: 'app2',
      entry: '//localhost:9511',
      container: '#container',
      activeRule: '/child2',
      props: {
        myname: 'child2 value'
      }
    }
  ],
  {
    beforeLoad: app => console.log('before load', app.name),
    beforeMount: [
      app => console.log('before mount', app.name)
    ],
    afterMount: app => {
      console.log('aftermount: ', app.name)
    },
    afterUnmount: app => {
      console.log('afterUnmount', app.name)
    }
  }
)

const state = {
  count: 0,
  wrap: {
    name: 'lisper',
    age: 1
  }
}
const action = initGlobalState(state)

setInterval(() => {
  // state.count++
  // state.wrap.age++
  // action.setGlobalState({
  //   wrap: {
  //     age: state.wrap.age
  //   }
  // })
}, 1000)

action.onGlobalStateChange((state, prev) => {
  console.log('root:')
  console.log(state)
})

runAfterFirstMounted(() => {
  console.log('runAfterFirstMounted')
})

start()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
