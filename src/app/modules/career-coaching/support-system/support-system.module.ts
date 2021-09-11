import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportSystemRoutingModule } from './support-system-routing.module';
import { SupportSystemComponent } from './support-system.component';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    SupportSystemComponent
  ],
  imports: [
    CommonModule,
    SupportSystemRoutingModule,
  ],
  providers:[ScriptService]
})
export class SupportSystemModule { }
