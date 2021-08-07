import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerCoachingComponent } from './career-coaching.component';

const routes: Routes = [{ path: '', component: CareerCoachingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerCoachingRoutingModule { }
