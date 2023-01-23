import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';
import { SecondsectionComponent } from './secondsection/secondsection.component';
import { ThirdsectionComponent } from './thirdsection/thirdsection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstsectionComponent,
    SecondsectionComponent,
    ThirdsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
