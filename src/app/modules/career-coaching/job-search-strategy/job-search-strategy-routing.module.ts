import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSearchStrategyComponent } from './job-search-strategy.component';

const routes: Routes = [{ path: '', component: JobSearchStrategyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSearchStrategyRoutingModule { }
