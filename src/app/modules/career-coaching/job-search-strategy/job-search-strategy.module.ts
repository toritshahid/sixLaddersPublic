import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchStrategyRoutingModule } from './job-search-strategy-routing.module';
import { JobSearchStrategyComponent } from './job-search-strategy.component';
import { ScriptService } from 'src/app/shared/scripts.service';



@NgModule({
  declarations: [
    JobSearchStrategyComponent
  ],
  imports: [
    CommonModule,
    JobSearchStrategyRoutingModule,
  ],
  providers:[ScriptService]
})
export class JobSearchStrategyModule { }
