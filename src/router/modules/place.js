import Layout from '@/layout'
export default {
  path: '/place',
  component: Layout,
  meta: { title: '点位管理', icon: 'dingwei' },
  children: [
    {
      path: "region",
      name: "region",
      component: () => import("@/views/region/index"),
      meta: { title: "区域管理" },
    },
    {
      path: "node",
      name: "node",
      component: () => import("@/views/node/index"),
      meta: { title: "点位管理" },
    },
    {
      path: "partner",
      name: "partner",
      component: () => import("@/views/partner/index"),
      meta: { title: "合作商管理" },
    },
  ],
}