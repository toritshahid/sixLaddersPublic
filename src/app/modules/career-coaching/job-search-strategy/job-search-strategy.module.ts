import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchStrategyRoutingModule } from './job-search-strategy-routing.module';
import { JobSearchStrategyComponent } from './job-search-strategy.component';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { ScriptService } from 'src/app/shared/scripts.service';



@NgModule({
  declarations: [
    JobSearchStrategyComponent
  ],
  imports: [
    CommonModule,
    JobSearchStrategyRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  providers:[ScriptService]
})
export class JobSearchStrategyModule { }
