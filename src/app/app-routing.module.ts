import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** layout Component */
import { LayoutComponent } from './layout/layout.component';

/** routing data  */
import { ROUTES } from "./common/route-menu";

const getRoute = () => {
  const children = [];
  children.push({ path: '', redirectTo: 'dashboard', pathMatch: 'full' });
  ROUTES.forEach(item => {
    children.push({ path: item.path, loadChildren: item.loadChildren });
  });
  return children;
}

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: getRoute(),
    // children: [
    //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //   { path: 'dashboard', loadChildren: 'app/routes/dashboard/dashboard.module#DashboardModule' }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
