import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedCompaniesRoutingModule } from './featured-companies-routing.module';
import { FeaturedCompaniesComponent } from './featured-companies.component';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    FeaturedCompaniesComponent,
  ],
  imports: [
    CommonModule,
    FeaturedCompaniesRoutingModule,
  ],
  providers: [ScriptService],
})
export class FeaturedCompaniesModule { }
