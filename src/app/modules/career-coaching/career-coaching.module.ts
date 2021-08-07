import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerCoachingRoutingModule } from './career-coaching-routing.module';
import { CareerCoachingComponent } from './career-coaching.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { ScriptService } from 'src/app/shared/scripts.service';

@NgModule({
  declarations: [
    CareerCoachingComponent
  ],
  imports: [
    CommonModule,
    CareerCoachingRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [ScriptService],
})
export class CareerCoachingModule { }
