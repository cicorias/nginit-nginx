# Reading config data at startup with Angular
This example follows and implements a basic Angular site that forces the read of configuration data from the server before initializing the application.

## Purpose
We ran into a scenario where we had an Angular site running in Docker on Azure WebApps (under Linux). Within Angular there is the `environment` support, which provies basic runtime configuration for the Angular app in static `json` files.

However, we wanted to simplify deployment and instead pull the data from from some enviroment variables server side. For this approach we took advantage of `AppSettings` in Azure WebApps - which show up as environment variables with an `APPSETTING_` prefix.

In this example, the server is nginx and a shell script is used to start nginx, but also create a static `config.json` file that is read by the service in the Angular app.

## Approach
TODO


# References
The approach on the nginx shell script and environment settings is from (Jurgen Van de Moere)[https://www.jvandemo.com/how-to-configure-your-angularjs-application-using-environment-variables/]
