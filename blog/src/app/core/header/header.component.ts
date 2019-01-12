import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { environment } from '../../../environments/environment'
import { ToolFunc } from '../../utils/helper'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>()
  public routerUri = environment.options.routerUri
  constructor(
    private tools: ToolFunc,
  ) { }
  ngOnInit() {}
  openSidebar() {
    this.toggle.emit()
  }
  goHome() {
    this.tools.goto('/home')
  }
  goto() {
    window.location.href = 'https://github.com/panzer-vor'
  }
}
