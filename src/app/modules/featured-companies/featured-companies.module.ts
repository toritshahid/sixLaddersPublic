import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedCompaniesRoutingModule } from './featured-companies-routing.module';
import { FeaturedCompaniesComponent } from './featured-companies.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { ScriptService } from 'src/app/shared/scripts.service';


@NgModule({
  declarations: [
    FeaturedCompaniesComponent,
  ],
  imports: [
    CommonModule,
    FeaturedCompaniesRoutingModule,
    FooterModule,
    HeaderModule
  ],
  providers: [ScriptService],
})
export class FeaturedCompaniesModule { }
