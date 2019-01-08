import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>()
  public routerUri = environment.options.routerUri
  constructor(
    private router: Router,
  ) { }
  ngOnInit() {}
  openSidebar() {
    this.toggle.emit()
  }
  goHome() {
    this.router.navigateByUrl(`${this.routerUri}home`)
  }
  goto() {
    window.location.href = 'https://github.com/panzer-vor'
  }
}
