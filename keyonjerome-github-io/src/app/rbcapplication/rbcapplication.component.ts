import { Component, OnInit } from '@angular/core';
import {} from '@fortawesome/free-regular-svg-icons';
import {faGithub,faFacebook,faLinkedinIn,} from '@fortawesome/free-brands-svg-icons';
import {faAt,faMailBulk,faHeart} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-rbcapplication',
  templateUrl: './rbcapplication.component.html',
  styleUrls: ['./rbcapplication.component.css']
})
export class RBCApplicationComponent implements OnInit {
  faHeart =faHeart;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedinIn = faLinkedinIn;
  faAt = faAt;
  constructor() { }

  ngOnInit(): void {
  }

}
