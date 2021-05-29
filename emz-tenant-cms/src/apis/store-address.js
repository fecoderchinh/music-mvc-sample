import request from '@/utils/request'


export function create(data) {
  return request({
    url: 'store',
    method: 'post',
    data
  })
}

export function getAll(params) {
  return request({
    url: 'store',
    params: params
  })
}

export function get(id) {
  return request({
    url: 'store/'+id
  })
}

export function update(id, data) {
  return request({
    url: 'store/'+ id,
    method: 'put',
    data
  })
}

export function remove(id){
  return request({
    url: 'store/'+id,
    method: 'delete',
  })
}