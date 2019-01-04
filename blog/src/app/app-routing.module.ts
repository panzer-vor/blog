import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './view/article/article.component';
import { HomeComponent } from './view/home/home.component'
import { environment } from '../environments/environment'
const routes: Routes = [
  {
    path: `${environment.httpConfig.baseUri}`,
    component: HomeComponent,
  },
  {
    path: `${environment.httpConfig.baseUri}/home`,
    redirectTo: ''
  },
  {
    path: `${environment.httpConfig.baseUri}/index`,
    redirectTo: ''
  },
  {
    path: `${environment.httpConfig.baseUri}/article/:id`,
    component: ArticleComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
