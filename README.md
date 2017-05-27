# Reading config data at startup with Angular
This example follows and implements a basic Angular site that forces the read of configuration data from the server before initializing the application.

## Purpose
We ran into a scenario where we had an Angular site running in Docker on Azure WebApps (under Linux). Within Angular there is the `environment` support, which provies basic runtime configuration for the Angular app in static `json` files.

However, we wanted to simplify deployment and instead pull the data from from some enviroment variables server side. For this approach we took advantage of `AppSettings` in Azure WebApps - which show up as environment variables with an `APPSETTING_` prefix.

Then, using a simple NodeJS server for static files, courtesy of this StackOverflow post: (How to call an rest api while bootstrapping angular 2 app)[http://stackoverflow.com/questions/41619443/how-to-call-an-rest-api-while-bootstrapping-angular-2-app].

## Approach
TODO

## Simmple Static Web Service
Simple Static Web Service with a small API
