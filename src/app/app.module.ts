
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartupService } from './startup.service';
import { SecondviewComponent } from './secondview/secondview.component';
import { ErrorComponent } from './error/error.component';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    SecondviewComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'second',
      component: SecondviewComponent,
    },{
      path: 'error',
      component: ErrorComponent
    }],{ useHash: true})
  ],
  providers: [
    HttpModule,
    StartupService,
    Title,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
