import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';
import { SecondsectionComponent } from './secondsection/secondsection.component';
import { ThirdsectionComponent } from './thirdsection/thirdsection.component';
import { FourthsectionComponent } from './fourthsection/fourthsection.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstsectionComponent,
    SecondsectionComponent,
    ThirdsectionComponent,
    FourthsectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
