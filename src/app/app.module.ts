import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SlideComponent } from './components/slide/slide.component';
import { Slide1Component } from './slides/slide-1/slide-1.component';
import { Slide2Component } from './slides/slide-2/slide-2.component';
import { EventsService } from './services/events.service';

import { MatSliderModule } from '@angular/material';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CodeComponent } from './components/code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    Slide1Component,
    Slide2Component,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    MatSliderModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
