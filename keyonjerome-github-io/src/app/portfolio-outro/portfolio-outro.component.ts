import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {} from '@fortawesome/free-regular-svg-icons';
import {faGithub,faFacebook,faLinkedinIn,} from '@fortawesome/free-brands-svg-icons';
import {faAt,faMailBulk} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-portfolio-outro',
  templateUrl: './portfolio-outro.component.html',
  styleUrls: ['./portfolio-outro.component.css']
})
export class PortfolioOutroComponent implements OnInit {
  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedinIn = faLinkedinIn;
  faAt = faAt;
  @Output() scrolltop = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(){ 
      this.scrolltop.emit("intro");
      }
}
