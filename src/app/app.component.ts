import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { StartupService } from './startup.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

    constructor(private startup: StartupService, private router: Router, private titleService: Title) { }

    title = "My site";
    //startupData: string;

    ngOnInit() {

        // If there is no startup data received (maybe an error!)
        // navigate to error route
        if (!this.startup.startupData) {
            console.log('startup data does not exists');
            this.router.navigate(['error'], { replaceUrl: true });
        }
        else {
            console.log('startup data exists.');
        }

        this.setTitle("Your Site..");
        //this.startupData = JSON.stringify(this.startup.startupData);
    
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

}
