import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FordLandingPageComponent } from './ford-landing-page/ford-landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JsonPageComponent } from './json-page/json-page.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    // MatToolbarModule
  ],
  declarations: [
    AppComponent,
    FordLandingPageComponent,
    JsonPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
