import { NgModule, SkipSelf, Optional } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { MatToolbarModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material'
import { loadSvgResources } from '../utils/svg-init'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { HttpClientModule } from '@angular/common/http'
import { BannerComponent } from './banner/banner.component'
import { SpinnerComponent } from './spinner/spinner.component'
import { AppRoutingModule } from '../app-routing.module'

@NgModule({
  declarations: [ HeaderComponent, SidebarComponent, BannerComponent, SpinnerComponent ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    HeaderComponent,  SidebarComponent, BannerComponent, SpinnerComponent
  ],
  providers: [
    {
      provide: 'BASE_HTTP_URI',
      useValue: 'http://localhost:7002/api',
    },
  ]
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
