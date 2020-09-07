import {request, request_mgj} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(page, sort) {
  return request_mgj({
    url:'/search',
    params: {
      page,
      sort
    }
  })
}