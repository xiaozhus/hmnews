import request from '@/utils/request.js'
// 处理用户相关的api请求
// 用户登录
export const login = ({ mobile, code }) => {
  return request({
    method: 'post',
    url: `/app/v1_0/authorizations`,
    data: {
      mobile,
      code
    }
  })
}
