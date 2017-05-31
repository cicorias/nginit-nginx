import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class StartupService {

    private _startupData: any;
    // data;

    constructor(private http: Http) { }

    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    load(): Promise<any> {

        this._startupData = null;

        return this.http
            .get('/config.json')
            .map((res: Response) => res.json())
            .toPromise()
            .then((data: any) => this._startupData = data)
            .catch((err: any) => Promise.resolve());
    }

    get startupData(): any {
        return this._startupData;
    }

    get gatewayApiHost():string {
        let rv = this.startupData["GatewayApiUrl"] 
            || environment.gatewayApiHost || 'http://localhost:3030';
        console.log('gatewayHost..: %s', rv);
        return rv;
    }

    get anotherWay():string {
        return this.startupData["GatewayApiUrl"];
    }

    //this fails to work as the accessor is not ready and load() hasn't run either.
    //public gwurl = this._startupData["GATEWAY_API_URL"] || "not loaded yet";

}