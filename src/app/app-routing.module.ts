import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CarrerCoachingComponent } from './carrer-coaching/carrer-coaching.component';
import { FeaturedCompaniesComponent } from './featured-companies/featured-companies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'careerCoaching', component: CarrerCoachingComponent},
  {path: 'featuredCompanies', component: FeaturedCompaniesComponent},
  {path: 'blogs', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
