import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { RBCApplicationComponent } from './rbcapplication/rbcapplication.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'portfolio',component:PortfolioPageComponent},
  {path:'rbc',component:RBCApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
