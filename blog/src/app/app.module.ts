import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatGridListModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToolFunc } from './utils/helper'
import { ArticleComponent } from './view/article/article.component'
import { HomeComponent } from './view/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-blog'
    }),
    AppRoutingModule,
    CoreModule,
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule,
  ],
  providers: [ToolFunc],
  bootstrap: [AppComponent]
})
export class AppModule { }
