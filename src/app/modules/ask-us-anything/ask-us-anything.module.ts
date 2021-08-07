import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskUsAnythingRoutingModule } from './ask-us-anything-routing.module';
import { AskUsAnythingComponent } from './ask-us-anything.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    AskUsAnythingComponent,
  ],
  imports: [
    CommonModule,
    AskUsAnythingRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [ScriptService],
})
export class AskUsAnythingModule { }
