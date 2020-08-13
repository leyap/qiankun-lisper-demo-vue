import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

let router = null
let instance = null

function render (props = {}) {
  instance = new Vue({
    router,
    store,
    data () {
      return {
        parent: props
      }
    },
    render: h => h(App)
  }).$mount('#app1')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('bootstrap!')
}

export async function mount (props) {
  // props 包含主应用传递的参数  也包括为子应用 创建的节点信息
  const store = props.store
  setInterval(() => {
    store.dispatch('setCount', store.state.count + 1)
  }, 1500)
  console.log('child1 props:')
  console.log(props)
  let age = 0
  props.onGlobalStateChange((state, prev) => {
    console.log('child1: ')
    console.log(state.wrap.age)
    age = state.wrap.age
  })

  setInterval(() => {
    age++
    props.setGlobalState({
      name: 'hello',
      count: 100,
      wrap: {
        age: age,
        color: 'red' + age
      }
    })
  }, 3000)
  render()
}

// 增加 update 钩子以便主应用手动更新微应用
// export async function update(props) {
// render();
// }

export async function unmount () {
  instance.$destroy()
  instance = null
  router = null
}
