import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthEffects } from './auth/store/effects';
import { AppViewComponent } from './core/containers/app-view/app-view.component';
import { CoreModule } from './core/core.module';
import { ApiInterceptor } from './shared/api.interceptor';
import * as fromRootStore from './store/reducers';
import { RouterEffects } from './store/router-effects';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    StoreRouterConnectingModule,
    StoreModule.forRoot(fromRootStore.reducers, { metaReducers: fromRootStore.metaReducers }),
    EffectsModule.forRoot([AuthEffects, RouterEffects]),
    !environment.production
    ? StoreDevtoolsModule.instrument()
    : []
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: fromRootStore.CustomRouterStateSerializer},
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  // bootstrap: [AppComponent]
  bootstrap: [AppViewComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));

  }
}
