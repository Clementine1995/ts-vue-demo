/** @format */

import http from './axios'

export const getUserInfo = () => {
  return http.request({
    url: '/xxxx/xxxx',
    method: 'get'
  })
}
