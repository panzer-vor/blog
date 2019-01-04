import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './view/article/article.component';
import { HomeComponent } from './view/home/home.component'
const routes: Routes = [
  {
    path: 'blog',
    component: HomeComponent,
  },
  {
    path: 'blog/home',
    redirectTo: '',
  },
  {
    path: 'blog/index',
    redirectTo: '',
  },
  {
    path: 'blog/article/:id',
    component: ArticleComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
