import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerLadderComponent } from './career-ladder.component';

const routes: Routes = [{ path: '', component: CareerLadderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerLadderRoutingModule { }
