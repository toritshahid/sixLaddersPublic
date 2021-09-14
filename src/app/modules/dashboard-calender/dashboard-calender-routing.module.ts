import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCalenderComponent } from './dashboard-calender.component';

const routes: Routes = [{ path: '', component: DashboardCalenderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardCalenderRoutingModule { }
