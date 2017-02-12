import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppComponents} from './components/index';
import {Services} from './services/index';
import {APP_PIPES} from './pipes/index';

@NgModule({
  declarations: [
    AppComponent,
    AppComponents,

    APP_PIPES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Services
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
