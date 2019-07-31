// 将token进行本地存储
const TOKEN_KEY = 'token'
// 设置token
export const setUser = data => {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
// 取出token
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(TOKEN_KEY))
}
// 移除tokens
export const removeUser = () => {
  return window.localStorage.removeItem(TOKEN_KEY)
}

// token的特点
// 1.保存token->localStorage
// 2.多个组件都要共享使用->vuex
