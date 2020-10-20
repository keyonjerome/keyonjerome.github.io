import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  // Easter egg
  window.console.log("Hey there. What're you doing, looking through the console?")
  // Whilen production mode, wipe out all console logs in the code; a preliminary measure
  window.console.log = function(){};
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
