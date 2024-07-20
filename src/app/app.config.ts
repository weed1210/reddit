import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { TuiRootModule } from '@taiga-ui/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(withHttpTransferCacheOptions({
      includePostRequests: true
    })),
    importProvidersFrom(
      TuiRootModule,
    ),
  ]
};
