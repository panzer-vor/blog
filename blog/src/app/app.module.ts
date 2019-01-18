import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from './utils/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToolFunc } from './utils/helper'
import { HttpRequestService } from './utils/httpRequest.service'
import { ViewModule } from './view/view.module'
import { MarkdownModule } from 'ngx-markdown'
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({
      appId: 'tanpopo'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    MarkdownModule.forRoot(),
    ViewModule,
  ],
  providers: [ToolFunc, HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
