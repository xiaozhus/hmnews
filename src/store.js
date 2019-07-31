import Vue from 'vue'
import Vuex from 'vuex'
// import { getUser, setUser } from '@/utils/autj.js'
import * as auth from '@/utils/auth.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user:存储包含token在内的对象数据
    uesr: auth.getUser()
  },
  mutations: {
    // 修改state中的user值为data形参值
    setUser (state, data) {
      // 修改state.user
      state.user = data
      // 修改ls中的token
      auth.setUser(state.user)
    }
  }
})
