import { NgModule } from '@angular/core'
import {
  MatIconModule,
  MatToolbarModule,
  MatChipsModule,
  MatGridListModule,
  MatSidenavModule,
  MatCardModule,
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
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatGridListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class MaterialModule { }
