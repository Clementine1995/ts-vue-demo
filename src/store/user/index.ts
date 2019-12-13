/** @format */

// import request from '@/service'
import { Commit } from 'vuex'
import { State, User } from './interface'

const state: State = {
  info: {
    name: '',
    id: '',
    vip: false
  },
  count: 0
}

const getters = {
  name: (state: State) => state.info.name,
  group: (state: State) => state.info.group
}

const actions = {
  async getUserInfo(context: { commit: Commit }) {
    // return request.get('/api/weatherApi', { params })
    // context.commit('setUser', {
    //   name: 'zhangsan',
    //   id: '123444',
    //   age: 28,
    //   vip: true,
    //   group: [{
    //     id: '123',
    //     name: 'group1'
    //   }]
    // })
    console.log('wolaihuoqu yonghu ')
  }
}

const mutations = {
  setUser(state: State, data: User): void {
    console.log(data)
    // state = data 不起作用。。
    // state = data
    state.info = data
    console.log(state)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
