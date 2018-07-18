import { Route } from "./route";
export const ROUTES: Route[] = [
  {
    name: "首页",
    path: "dashboard",
    loadChildren: "app/routes/dashboard/dashboard.module#DashboardModule",
    icon: "anticon anticon-appstore",
    children: [
      {
        path: 'test',
        name: '测试',
        loadChildren: "app/routes/dashboard/dashboard.module#DashboardModule",
      }
    ],
  },
  {
    name: "用户管理",
    path: "user",
    loadChildren: "app/routes/users/users.module#UsersModule",
    icon: "anticon anticon-user",
    children: []
  }
];