import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { TitleComponent } from './title/title.component';
import { Notification1Component } from './notification1/notification1.component';
import { Notification2Component } from './notification2/notification2.component';
import { PanelComponent } from './panel/panel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent,
    TitleComponent,
    Notification1Component,
    Notification2Component,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
