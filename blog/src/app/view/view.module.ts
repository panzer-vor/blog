import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CoreModule } from '../core/core.module'
import { ArticleComponent } from './article/article.component'
import { HomeComponent } from './home/home.component'
import { MaterialModule } from '../utils/material.module'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  declarations: [
    ArticleComponent,
    HomeComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    MarkdownModule.forChild(),
  ]
})
export class ViewModule {}
