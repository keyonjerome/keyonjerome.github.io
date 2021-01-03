import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
  useAnimation
  // ...
} from '@angular/animations';
import {
  ScrollDispatcher,
  CdkScrollable
} from '@angular/cdk/scrolling';
import {
  HostListener
} from '@angular/core';

import {SmoothScrollDirective,SmoothScrollToDirective} from 'ng2-smooth-scroll';
import { PortfolioIntroComponent } from '../portfolio-intro/portfolio-intro.component';


@Component({
  selector: 'app-portfolio-page',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
   
        background: '#F7F7F9'
      })),
      state('closed', style({
        // background:'url("../../assets/spartanroboticsswerve.svg")'
        background:'#29367D'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})

export class PortfolioPageComponent implements OnInit, AfterViewInit {
  isOpen = true;
  scrollNumbers = [400, 2000, 3000];
  scrollTop = document.documentElement.scrollTop;
  scrollTimeout: number = 1000;
  scrolling: boolean = false;

  constructor(private myscroll: ScrollDispatcher) {

  }
  toggle() {
    this.isOpen = !this.isOpen;
    console.log("Scroll Top" + this.scrollTop);
  }
  ngOnInit(): void {}
  getScrollTop() {
    this.scrollTop = document.documentElement.scrollTop;
  
    return this.scrollTop;
  }
  ngAfterViewInit() {
    // this.introComponent.nativeElement.
    // console.log('Values on ngAfterViewInit():');
    // console.log(this.portfolioIntroComponent);
  }  
  @HostListener("window:scroll", []) onScroll() {
    console.log("Scrolling true")
    this.scrolling = true;
    this.scrollTop = document.documentElement.scrollTop;
    console.log("Current scrollTop " + this.scrollTop)

    // if (this.scrollIsWithinFirstSlide()) useAnimation(this.firstSlideAnimation);
      setTimeout(() => {
        this.scrolling = false;
        console.log("Scrolling false")
      }, this.scrollTimeout)
  }
  scrollIsWithinFirstSlide() {
    console.log(this.scrollTop < this.scrollNumbers[0])
    if (this.scrollTop < this.scrollNumbers[0]) {
      return true;
    } else return false;
  }
  onScrollButton(e:Event) {
    const introcomp = document.getElementById('intro');
    introcomp.scrollIntoView({behavior:'smooth'});
      
    // this.portfolioIntroComponent.nativeElement.scrollIntoView();
  }



}
