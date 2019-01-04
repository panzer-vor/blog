import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { environment } from '../../environments/environment'

const assetsUri = environment.options.assetsUri

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon(
    'github',
    ds.bypassSecurityTrustResourceUrl(`${assetsUri || '../../assets/'}images/icons/github.svg`))
}
