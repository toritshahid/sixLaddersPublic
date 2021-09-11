import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninCandidateComponent } from './signin-candidate.component';

const routes: Routes = [{ path: '', component: SigninCandidateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninCandidateRoutingModule { }
