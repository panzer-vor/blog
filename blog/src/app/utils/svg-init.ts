import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon(
    'github',
    ds.bypassSecurityTrustResourceUrl('../../public/images/icons/github.svg'))
}
