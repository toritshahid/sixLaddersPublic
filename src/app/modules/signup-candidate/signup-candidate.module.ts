import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupCandidateRoutingModule } from './signup-candidate-routing.module';
import { SignupCandidateComponent } from './signup-candidate.component';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    SignupCandidateComponent
  ],
  imports: [
    CommonModule,
    SignupCandidateRoutingModule,
  ],
  providers: [ScriptService]
})
export class SignupCandidateModule { }
