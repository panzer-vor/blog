import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './view/article/article.component';
import { HomeComponent } from './view/home/home.component'
import { environment } from '../environments/environment'
const routes: Routes = [
  {
    path: `${environment}`,
    component: HomeComponent,
  },
  {
    path: `${environment}home`,
    redirectTo: ''
  },
  {
    path: `${environment}index`,
    redirectTo: ''
  },
  {
    path: `${environment}article/:id`,
    component: ArticleComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
