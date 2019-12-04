import http from '../utils/axios'

export const getUserInfo = () => {
  return http.request({
    url: '/xxxx/xxxx',
    method: 'get'
  })
}
