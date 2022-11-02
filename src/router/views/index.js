import Layout from "@/page/index/";

export default [
  {
    path: "/wel",
    component: Layout,
    redirect: "/wel/index",
    children: [
      {
        path: "index",
        name: "首页",
        meta: {
          i18n: "dashboard"
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/wel/index")
      }
    ]
  },
  {
    path: "/dict-horizontal",
    component: Layout,
    redirect: "/dict-horizontal/index",
    children: [
      {
        path: "index",
        name: "字典管理",
        meta: {
          i18n: "dict"
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/util/demo/dict-horizontal"
          )
      }
    ]
  },
  {
    path: "/dict-vertical",
    component: Layout,
    redirect: "/dict-vertical/index",
    children: [
      {
        path: "index",
        name: "字典管理",
        meta: {
          i18n: "dict"
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/util/demo/dict-vertical"
          )
      }
    ]
  },
  {
    path: "/info",
    component: Layout,
    redirect: "/info/index",
    children: [
      {
        path: "index",
        name: "个人信息",
        meta: {
          i18n: "info"
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/system/userinfo")
      }
    ]
  },
  {
    path: "/product",
    name: "模型",
    component: Layout,
    children: [
      {
        path: "index",
        name: "模型列表",
        component: () => import("@/views/product/index")
      },
      {
        path: "create",
        name: "创建模型",
        component: () => import("@/views/product/create2")
      },
      {
        path: "detail",
        name: "模型详情",
        component: () => import("@/views/product/detail")
      }
    ]
  },
  {
    path: "/device",
    name: "设备",
    component: Layout,
    children: [
      {
        path: "index",
        name: "设备列表",
        component: () => import("@/views/device/index")
      },
      {
        path: "create",
        name: "创建设备",
        component: () => import("@/views/device/create")
      },
      {
        path: "detail",
        name: "设备详情",
        component: () => import("@/views/device/detail")
      }
    ]
  }
];
