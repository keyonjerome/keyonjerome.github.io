import { APP_BASE_HREF } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { RBCApplicationComponent } from './rbcapplication/rbcapplication.component';
import { RedirectGuard } from './redirect.guard';


const basehref = "https://keyon.io/";
const portfoliolink = basehref + 'assets/Keyon-Jerome-Web-Portfolio.pdf';
const resumelink = basehref + 'assets/Keyon-Jerome-CS-Resume.pdf';
const rickroll = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'

const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'portfolio',component:PortfolioPageComponent},
  // This is a rick roll. Please do not think of this as serious.
  {
    path: 'survey',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: rickroll
    }
  },
  {
    path: 'portfolio',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: portfoliolink
    }
  },
  {
    path: 'resume',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: resumelink
    }
  },
  {
    path:'**', component:HomeComponent
  },
      
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  @Inject(APP_BASE_HREF) public baseHref: string
 }
