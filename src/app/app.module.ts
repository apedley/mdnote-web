import { environment } from '../environments/environment';
import { AuthEffects } from './auth/store/effects';
import { LayoutEffects } from './core/store/layout.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MarkdownModule } from 'ngx-markdown';


import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { NotesModule } from 'app/notes/notes.module';


import * as fromRootStore from './store/reducers';
import { LayoutComponent } from './core/containers/layout/layout.component';
import { RouterEffects } from './store/router-effects';
import { AppViewComponent } from './core/containers/app-view/app-view.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './shared/api.interceptor';

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
    StoreModule.forRoot(fromRootStore.reducers),
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
export class AppModule { }
