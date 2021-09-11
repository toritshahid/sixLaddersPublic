import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninCandidateRoutingModule } from './signin-candidate-routing.module';
import { SigninCandidateComponent } from './signin-candidate.component';


@NgModule({
  declarations: [
    SigninCandidateComponent
  ],
  imports: [
    CommonModule,
    SigninCandidateRoutingModule
  ]
})
export class SigninCandidateModule { }
