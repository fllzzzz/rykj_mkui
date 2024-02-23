import request from '@/utils/request'

// 查询文档分享列表
export function listShare(query) {
  return request({
    url: '/system/share/list',
    method: 'get',
    params: query
  })
}

// 查询文档分享详细
export function getShare(id) {
  return request({
    url: '/system/share/' + id,
    method: 'get'
  })
}

// 新增文档分享
export function addShare(data) {
  return request({
    url: '/system/share',
    method: 'post',
    data: data
  })
}

// 修改文档分享
export function updateShare(data) {
  return request({
    url: '/system/share',
    method: 'put',
    data: data
  })
}

// 删除文档分享
export function delShare(id) {
  return request({
    url: '/system/share/' + id,
    method: 'delete'
  })
}
