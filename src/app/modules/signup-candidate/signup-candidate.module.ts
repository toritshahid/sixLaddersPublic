import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupCandidateRoutingModule } from './signup-candidate-routing.module';
import { SignupCandidateComponent } from './signup-candidate.component';


@NgModule({
  declarations: [
    SignupCandidateComponent
  ],
  imports: [
    CommonModule,
    SignupCandidateRoutingModule
  ]
})
export class SignupCandidateModule { }
