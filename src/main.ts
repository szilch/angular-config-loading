import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppConfig } from './app/config/app.config';

if (environment.production) {
  enableProdMode();
}

(async () => {
  const response = await fetch('assets/env.json');
  Object.assign(environment, await response.json() as AppConfig);

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})();


