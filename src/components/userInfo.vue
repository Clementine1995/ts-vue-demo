<template>
  <div>
    <slot :info="info1"></slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface OwnUser {
  email: string,
  phone: string
}

@Component
export default class Home extends Vue {
  info1: OwnUser = {
    email: '185333xxxxx@123.com',
    phone: '123123xxxxxxx'
  }
}
</script>
