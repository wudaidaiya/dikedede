import request from '@/utils/request'
// 工单列表
export function getListSearch() {
    return request({
      url: '/task-service/task/search',
      method: 'get',
    })
  }