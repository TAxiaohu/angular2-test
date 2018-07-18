import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzButtonModule
  ],
  declarations: [DashboardComponent, TestComponent]
})
export class DashboardModule { }
