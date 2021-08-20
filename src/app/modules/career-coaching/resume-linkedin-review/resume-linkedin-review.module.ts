import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeLinkedinREviewRoutingModule } from './resume-linkedin-review-routing.module';
import { ResumeLinkedinREviewComponent } from './resume-linkedin-review.component';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    ResumeLinkedinREviewComponent
  ],
  imports: [
    CommonModule,
    ResumeLinkedinREviewRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  providers:[ScriptService]
})
export class ResumeLinkedinREviewModule { }
