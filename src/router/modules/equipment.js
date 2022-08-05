import Layout from '@/layout'
export default {
  path: '/equipment',
  component: Layout,
  meta: { title: '设备管理', icon: 'shebei' },
  children: [
    {
      path: "index",
      component: () => import("@/views/vm/index"),
      name: "index",
      meta: { title: "设备管理" },
    },
    {
      path: "status",
      component: () => import("@/views/status/index"),
      name: "status",
      meta: { title: "设备状态" },
    },
    {
      path: "type",
      component: () => import("@/views/type/index"),
      name: "type",
      meta: { title: "设备类型管理" },
    },
  ],
}
