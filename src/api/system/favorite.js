import request from '@/utils/request'

// 查询文档点赞/收藏列表
export function listFavorite(query) {
  return request({
    url: '/system/favorite/list',
    method: 'get',
    params: query
  })
}

// 查询文档点赞/收藏详细
export function getFavorite(id) {
  return request({
    url: '/system/favorite/' + id,
    method: 'get'
  })
}

// 新增文档点赞/收藏
export function addFavorite(data) {
  return request({
    url: '/system/favorite',
    method: 'post',
    data: data
  })
}

// 修改文档点赞/收藏
export function updateFavorite(data) {
  return request({
    url: '/system/favorite',
    method: 'put',
    data: data
  })
}

// 删除文档点赞/收藏
export function delFavorite(id) {
  return request({
    url: '/system/favorite/' + id,
    method: 'delete'
  })
}
