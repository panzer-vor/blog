import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './view/article/article.component';
import { HomeComponent } from './view/home/home.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'index',
    redirectTo: ''
  },
  {
    path: 'article',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
