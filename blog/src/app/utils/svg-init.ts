import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { HttpModule } from '@angular/http'

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon(
    'github',
    ds.bypassSecurityTrustResourceUrl('../../assets/images/icons/github.svg'))
}
