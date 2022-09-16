import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

constructor(private iab: InAppBrowser) { }


  youtube(){
    var url = "https://www.youtube.com";
    var options:InAppBrowserOptions={
      zoom:'yes'
    }
    this.iab.create(url,'_blank', options)
  }


}
