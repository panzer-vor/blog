import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CoreModule } from '../core/core.module'
import { ArticleComponent } from './article/article.component'
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from '../app-routing.module'
import { MatCardModule, MatButtonModule, MatChipsModule } from '@angular/material'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  declarations: [
    ArticleComponent,
    HomeComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatChipsModule,
    MarkdownModule.forChild(),
  ]
})
export class ViewModule {}
