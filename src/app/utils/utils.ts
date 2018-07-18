import { ROUTES } from "../common/route-menu";

export function strUrl(url: string) {
  const breadcrumb: Array<any> = [];
  const pathname = url.substring(1, url.length);
  if (!pathname.includes('/')) {
    const dashboardRoute = ROUTES.find(item => item.path === 'dashboard');
    breadcrumb.push(dashboardRoute);
    return breadcrumb;
  }
  const activityRoute = pathname.split('/');
  return breadcrumb;
}