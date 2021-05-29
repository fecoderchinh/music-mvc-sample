import request from '@/utils/request'

export function getCity() {
    return request({
      url: '/provinces',
      method: 'GET'
    })
}

export function getDistrictByCityCode(code) {
    return request({
      url: '/provinces/'+code+'/districts',
      method: 'GET'
    })
}

export function getWardByDistrictCode(code) {
    return request({
      url: '/districts/'+code+'/wards',
      method: 'GET'
    })
}