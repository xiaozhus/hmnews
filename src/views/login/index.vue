<template>
  <div>
    <!-- 导航 -->
    <!-- 邮箱中文提示 -->
    <!-- 验证手机号 -->

    <!-- <input v-validate="'required|phone'" name="phone" type="text">
    <span>{{errors.first('phone')}}</span> -->

    <van-nav-bar title="登录" />

    <!-- 表单 -->
    <form action="/" method="POST">
      <van-cell-group>
        <van-field
        :error-message="errors.first('phone')"
        v-validate="'required|phone'" name="phone"
        v-model="user.mobile" required clearable label="手机号" placeholder="请输入手机号"></van-field>
        <van-field v-model="user.code" type="possword" label="密码" placeholder="请输入密码" required></van-field>
      </van-cell-group>
      <van-button
      :loading="loginLoading"
      @click.prevent="handleLogin" type="info" block>登录</van-button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
// import request from '@/utils/request.js'
import { login } from '@/api/user.js'
import { mapMutations } from 'vuex'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      },
      // 默认值, 不转
      loginLoading: false
    }
  },
  methods: {
    // 在methods中有setUser方法
    ...mapMutations(['setUser']),
    async handleLogin () {
      // 点击按钮之后转
      this.loginLoading = true
      try {
        // 验证规则是否通过
        this.$validator.validate().then(async valid => {
          // 如果没有通过
          if (!valid) {
            console.log('手机号格式不正确')
            // 验证失败不转
            this.loginLoading = false
            return
          }
          // 验证通过
          const data = await login(this.user)
          console.log(data)
          this.$store.commit('setUser', data)
          // 验证通过不转
          this.loginLoading = false
        })
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
