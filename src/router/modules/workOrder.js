import Layout from '@/layout'
export default {
  path: '/workorder',
  component: Layout,
  meta: { title: '工单管理', icon: 'dingdan2' },
  children: [
    {
      path: '/operation',
      component: () => import('@/views/operation/index'),
      meta: { title: '运营工单' },
    },
    {
      path: '/maintenance',
      component: () => import('@/views/maintenance/index'),
      meta: { title: '运维工单' },
    },
  ],
}
