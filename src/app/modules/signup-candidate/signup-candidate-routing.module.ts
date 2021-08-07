import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupCandidateComponent } from './signup-candidate.component';

const routes: Routes = [{ path: '', component: SignupCandidateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupCandidateRoutingModule { }
