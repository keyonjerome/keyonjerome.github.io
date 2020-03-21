import {
  Component,
  OnInit
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


@Component({
  selector: 'app-portfolio-page',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        // height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        // height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})

export class PortfolioPageComponent implements OnInit {
  isOpen = true;
  scrollNumbers = [1000, 2000, 3000];
  scrollTop = document.documentElement.scrollTop;
  scrollTimeout: number = 1000;
  scrolling: boolean = false;
   firstSlideAnimation =    animation(   [state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'green'
  })),
  transition('open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ])]);

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



}
