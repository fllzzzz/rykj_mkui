import request from '@/utils/request'

// 查询水印设置列表
export function listMark(query) {
  return request({
    url: '/system/mark/list',
    method: 'get',
    params: query
  })
}

// 查询水印设置详细
export function getMark(id) {
  return request({
    url: '/system/mark/' + id,
    method: 'get'
  })
}

// 新增水印设置
export function addMark(data) {
  return request({
    url: '/system/mark',
    method: 'post',
    data: data
  })
}

// 修改水印设置
export function updateMark(data) {
  return request({
    url: '/system/mark',
    method: 'put',
    data: data
  })
}

// 删除水印设置
export function delMark(id) {
  return request({
    url: '/system/mark/' + id,
    method: 'delete'
  })
}
