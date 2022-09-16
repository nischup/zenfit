import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgCircleProgressModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy  },
    InAppBrowser
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
