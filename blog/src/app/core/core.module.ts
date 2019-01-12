import { NgModule, SkipSelf, Optional } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { MaterialModule } from '../utils/material.module'
import { loadSvgResources } from '../utils/svg-init'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [ HeaderComponent, SidebarComponent ],
  imports: [
    CommonModule,
    MaterialModule,
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
      throw new Error('模块已经存在')
    }
    loadSvgResources(ir, ds)
  }
}
