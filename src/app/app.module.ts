import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PrimengModule } from './primeng/primeng.module';
import { CardComponent } from './components/card/card.component';
import { JobsComponent } from './components/jobs/jobs.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    JobsComponent
  ],
  imports: [
    PrimengModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
