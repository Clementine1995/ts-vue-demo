<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="setUserInfo">获取用户信息</button>
    <div>{{ user.info.name }}</div>
    <div v-for="item of user.info.group" :key="item.id">group: {{ item.name }}</div>
    <user-info #default="infoSlot">
      {{ infoSlot.info.email }}
    </user-info>
    <svg-icon iconClass="lishi" className="svg-lishi"></svg-icon>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State as userState, User } from '../store/user/interface'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import userInfo from '@/components/userInfo.vue' // @ is an alias to /src
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

// const someModule = namespace('path/to/module')

@Component({
  components: {
    HelloWorld,
    'user-info': userInfo
  }
})
export default class Home extends Vue {
  @Prop({ default: 0 }) private propA: number

  @State private user: User

  // @State private setting!: SettingState;
  // @Getter private syncData: any;
  // @Mutation private changeHourly!: (checked: boolean) => void;
  // @Action private sync!: (data: any) => void;

  // @State('foo') stateFoo
  // @State(state => state.bar) stateBar
  // @Getter('foo') getterFoo
  @Action('getUserInfo') private getUser: () => void
  @Mutation private setUser: (data: User) => void
  // @someModule.Getter('foo') moduleGetterFoo

  private setUserInfo (): void {
    this.setUser({
      name: 'zhangsan',
      id: '123444',
      age: 28,
      vip: true,
      group: [{
        id: '123',
        name: 'group1'
      }]
    })
  }
  private created () {
    console.log(this.user)
  }
}
</script>
<style lang="scss">
.svg-lishi {
  width: 2em;
  height: 2em;
}
</style>
