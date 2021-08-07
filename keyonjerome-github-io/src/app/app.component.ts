import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Inject(APP_BASE_HREF) public baseHref: string;
  title = 'keyonjerome-github-io';
}
