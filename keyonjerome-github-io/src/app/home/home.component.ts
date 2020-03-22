import { Component, OnInit } from '@angular/core';
import {faGithub,faFacebook,faLinkedinIn,} from '@fortawesome/free-brands-svg-icons';
import {faAt,faMailBulk} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedinIn = faLinkedinIn;
  faAt = faAt;
  constructor() { }

  ngOnInit() {
  }

}
