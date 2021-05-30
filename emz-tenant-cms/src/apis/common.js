import request from '@/utils/request'

export function getCity() {
    return request({
      url: 'location/provinces',
      method: 'GET'
    })
}

export function getDistrictByCityCode(code) {
    return request({
      url: 'location/provinces/'+code+'/districts',
      method: 'GET'
    })
}

export function getWardByDistrictCode(code) {
    return request({
      url: 'location/districts/'+code+'/wards',
      method: 'GET'
    })
}