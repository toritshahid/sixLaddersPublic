import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedCompaniesComponent } from './featured-companies.component';

const routes: Routes = [{ path: '', component: FeaturedCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedCompaniesRoutingModule { }
