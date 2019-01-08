import { NgModule, SkipSelf, Optional } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { MatToolbarModule, MatIconModule } from '@angular/material'
import { loadSvgResources } from '../utils/svg-init'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from '../app-routing.module'

@NgModule({
  declarations: [ HeaderComponent, SidebarComponent ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,  SidebarComponent,
  ],
})
export class CoreModule {
  constructor(
    ds: DomSanitizer,
    ir: MatIconRegistry,
    @Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在，无法再次加载')
    }
    loadSvgResources(ir, ds)
  }
}
