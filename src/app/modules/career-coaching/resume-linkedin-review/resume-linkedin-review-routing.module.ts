import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeLinkedinREviewComponent } from './resume-linkedin-review.component';

const routes: Routes = [{ path: '', component: ResumeLinkedinREviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeLinkedinREviewRoutingModule { }
