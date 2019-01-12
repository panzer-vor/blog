import { NgModule } from '@angular/core'
import {
  MatIconModule,
  MatToolbarModule,
  MatChipsModule,
  MatGridListModule,
  MatSidenavModule,
  MatCardModule,
  MatBadgeModule,
  MatButtonModule,
} from '@angular/material'

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatGridListModule,
    MatSidenavModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatGridListModule,
    MatSidenavModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
  ],
})
export class MaterialModule { }
