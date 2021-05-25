import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/create-stores',
    method: 'post',
    data
  })
}