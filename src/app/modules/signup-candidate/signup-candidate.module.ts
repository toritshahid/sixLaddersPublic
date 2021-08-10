import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupCandidateRoutingModule } from './signup-candidate-routing.module';
import { SignupCandidateComponent } from './signup-candidate.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    SignupCandidateComponent
  ],
  imports: [
    CommonModule,
    SignupCandidateRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [ScriptService]
})
export class SignupCandidateModule { }
