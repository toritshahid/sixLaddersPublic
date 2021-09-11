import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewTrainingRoutingModule } from './interview-training-routing.module';
import { InterviewTrainingComponent } from './interview-training.component';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    InterviewTrainingComponent
  ],
  imports: [
    CommonModule,
    InterviewTrainingRoutingModule,
  ],
  providers:[ScriptService]
})
export class InterviewTrainingModule { }
