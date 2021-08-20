import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerLadderRoutingModule } from './career-ladder-routing.module';
import { CareerLadderComponent } from './career-ladder.component';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    CareerLadderComponent
  ],
  imports: [
    CommonModule,
    CareerLadderRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [ScriptService]
})
export class CareerLadderModule { }
