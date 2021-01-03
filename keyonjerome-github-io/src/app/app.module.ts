import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {FaIconLibrary,FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PortfolioIntroComponent } from './portfolio-intro/portfolio-intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {RouterModule} from '@angular/router';
import { SpartanRoboticsComponent } from './spartan-robotics/spartan-robotics.component';
import { TeachersPetComponent } from './teachers-pet/teachers-pet.component';
import { FRCVisionComponent } from './frcvision/frcvision.component';
import { KeyonsJournalComponent } from './keyons-journal/keyons-journal.component';
import { PortfolioOutroComponent } from './portfolio-outro/portfolio-outro.component';
import {SmoothScrollToDirective, SmoothScrollDirective} from 'ng2-smooth-scroll';
import { RBCApplicationComponent } from './rbcapplication/rbcapplication.component';
import { LivelaunchComponent } from './livelaunch/livelaunch.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioPageComponent,
    PortfolioIntroComponent,
    SpartanRoboticsComponent,
    TeachersPetComponent,
    FRCVisionComponent,
    KeyonsJournalComponent,
    PortfolioOutroComponent,
    RBCApplicationComponent,
    LivelaunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
