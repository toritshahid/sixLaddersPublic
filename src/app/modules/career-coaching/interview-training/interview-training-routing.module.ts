import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewTrainingComponent } from './interview-training.component';

const routes: Routes = [{ path: '', component: InterviewTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewTrainingRoutingModule { }
