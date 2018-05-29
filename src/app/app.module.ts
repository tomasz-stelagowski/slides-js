import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SlideComponent } from './components/slide/slide.component';
import { Slide1Component } from './slides/slide-1/slide-1.component';
import { Slide2Component } from './slides/slide-2/slide-2.component';
import { EventsService } from './services/events.service';


@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    Slide1Component,
    Slide2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
