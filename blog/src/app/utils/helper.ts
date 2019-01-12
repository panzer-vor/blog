import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'

@Injectable()
export class ToolFunc {
  public routerUri = environment.options.routerUri
  constructor(
    private router: Router,
  ) { }
  public goto(url) {
    this.router.navigateByUrl(`${this.routerUri}${url}`)
  }
}
