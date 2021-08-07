import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCareerExplorationComponent } from './new-career-exploration.component';

const routes: Routes = [{ path: '', component: NewCareerExplorationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCareerExplorationRoutingModule { }
