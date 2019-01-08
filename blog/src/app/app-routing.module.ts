import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ArticleComponent } from './view/article/article.component'
import { HomeComponent } from './view/home/home.component'
import { environment } from '../environments/environment'
const routes: Routes = [
  {
    path: `${environment.options.routerUri ? environment.options.routerUri.split('/')[0] : environment.options.routerUri}`,
    component: HomeComponent,
  },
  {
    path: `${environment.options.routerUri}home`,
    redirectTo: `${environment.options.routerUri}`,
  },
  {
    path: `${environment.options.routerUri}article/:id`,
    component: ArticleComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
