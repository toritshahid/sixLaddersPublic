import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskUsAnythingRoutingModule } from './ask-us-anything-routing.module';
import { AskUsAnythingComponent } from './ask-us-anything.component';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    AskUsAnythingComponent,
  ],
  imports: [
    CommonModule,
    AskUsAnythingRoutingModule,
  ],
  providers: [ScriptService],
})
export class AskUsAnythingModule { }
