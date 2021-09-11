import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCareerExplorationRoutingModule } from './new-career-exploration-routing.module';
import { NewCareerExplorationComponent } from './new-career-exploration.component';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    NewCareerExplorationComponent
  ],
  imports: [
    CommonModule,
    NewCareerExplorationRoutingModule,
  ],
  providers: [ScriptService]
})
export class NewCareerExplorationModule { }
