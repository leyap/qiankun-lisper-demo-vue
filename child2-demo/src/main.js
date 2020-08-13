import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

let router = null
let instance = null

function render (props = {}) {
  router = new VueRouter({
    // mode: 'hash',
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/child2' : '/',
    routes
  })

  instance = new Vue({
    router,
    store,
    data () {
      return {
        parent: props
      }
    },
    render: h => h(App)
  }).$mount('#app2')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('bootstrap!')
}

export async function mount (props) {
  // props 包含主应用传递的参数  也包括为子应用 创建的节点信息
  console.log('props:')
  console.log(props.data)
  render()
}

// 增加 update 钩子以便主应用手动更新微应用
// export async function update(props) {
// render();
// }

window.appname = 'child2'

export async function unmount () {
  instance.$destroy()
  instance = null
  router = null
}
