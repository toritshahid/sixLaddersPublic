import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCalenderRoutingModule } from './dashboard-calender-routing.module';
import { DashboardCalenderComponent } from './dashboard-calender.component';


@NgModule({
  declarations: [
    DashboardCalenderComponent
  ],
  imports: [
    CommonModule,
    DashboardCalenderRoutingModule
  ]
})
export class DashboardCalenderModule { }
