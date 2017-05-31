import { Component, OnInit } from '@angular/core';
import { AppComponent } from "app/app.component";
import { StartupService } from "app/startup.service";

@Component({
  selector: 'app-secondview',
  templateUrl: './secondview.component.html',
  styleUrls: ['./secondview.component.css']
})

export class SecondviewComponent implements OnInit {

  constructor(private app: AppComponent, private startup: StartupService) { }

  ngOnInit() {
    this.app.setTitle("Foobar 2");
    console.log('URL - via get %s', this.startup.gatewayApiHost);
    console.log('URL - via simple get %s', this.startup.anotherWay);
    //console.log('URL via Public field is: %s', startup.gwurl);
  }

}
