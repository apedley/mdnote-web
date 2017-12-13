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

import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppComponent } from './app.component';
import { NotesModule } from 'app/notes/notes.module';
import { environment } from '../environments/environment';

import * as fromRootStore from './reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    NotesModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(fromRootStore.reducers),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production
    ? StoreDevtoolsModule.instrument()
    : []
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: fromRootStore.CustomRouterStateSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
