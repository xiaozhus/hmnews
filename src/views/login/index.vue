<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="登录" />

    <!-- 表单 -->
    <form action="/" method="POST">
      <van-cell-group>
        <van-field v-model="user.mobile" required clearable label="手机号" placeholder="请输入手机号"></van-field>
        <van-field v-model="user.code" type="possword" label="密码" placeholder="请输入密码" required></van-field>
      </van-cell-group>
      <van-button @click.prevent="handleLogin" type="info" block>登录</van-button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
// import request from '@/utils/request.js'
import { login } from '@/api/user.js'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        const data = await login(this.user)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #1989fa;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
