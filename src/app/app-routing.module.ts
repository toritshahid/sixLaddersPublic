import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'askUsAnything', loadChildren: () => import('./modules/ask-us-anything/ask-us-anything.module').then(m => m.AskUsAnythingModule),  },
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'blogs', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'careerCoaching', loadChildren: () => import('./modules/career-coaching/career-coaching.module').then(m => m.CareerCoachingModule) },
  { path: 'featuredCompanies', loadChildren: () => import('./modules/featured-companies/featured-companies.module').then(m => m.FeaturedCompaniesModule) },
  { path: 'postAJob', loadChildren: () => import('./modules/post-ajob/post-ajob.module').then(m => m.PostAJobModule) },
  { path: 'header', loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule) },
  { path: 'footer', loadChildren: () => import('./modules/footer/footer.module').then(m => m.FooterModule) },
  { path: 'interviewTraining', loadChildren: () => import('./modules/career-coaching/interview-training/interview-training.module').then(m => m.InterviewTrainingModule) },
  { path: 'jobSearchStrategy', loadChildren: () => import('./modules/career-coaching/job-search-strategy/job-search-strategy.module').then(m => m.JobSearchStrategyModule) },
  { path: 'newCareerExploration', loadChildren: () => import('./modules/career-coaching/new-career-exploration/new-career-exploration.module').then(m => m.NewCareerExplorationModule) },
  { path: 'resumeLinkedinReview', loadChildren: () => import('./modules/career-coaching/resume-linkedin-review/resume-linkedin-review.module').then(m => m.ResumeLinkedinREviewModule) },
  { path: 'supportSystem', loadChildren: () => import('./modules/career-coaching/support-system/support-system.module').then(m => m.SupportSystemModule) },
  { path: 'signupCandidate', loadChildren: () => import('./modules/signup-candidate/signup-candidate.module').then(m => m.SignupCandidateModule) },
  { path: 'careerLadder', loadChildren: () => import('./modules/career-coaching/career-ladder/career-ladder.module').then(m => m.CareerLadderModule) },
  { path: 'editProfile', loadChildren: () => import('./modules/dasboard/editprofile/editprofile.module').then(m => m.EditprofileModule) },
  { path: 'signinCandidate', loadChildren: () => import('./modules/signin-candidate/signin-candidate.module').then(m => m.SigninCandidateModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
