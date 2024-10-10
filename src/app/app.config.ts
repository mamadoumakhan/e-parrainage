import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
    importProvidersFrom(
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
      })
    )
  ]
};
