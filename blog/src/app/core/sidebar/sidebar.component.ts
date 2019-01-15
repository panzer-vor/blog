import { Component, OnInit } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpRequestService } from '../../utils/httpRequest.service'
import { ToolFunc } from '../../utils/helper'
import { ISidebarTagInfo, IHttpRecords } from './sidebar.interface'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routerUri = environment.options.routerUri
  public assetsUri = environment.options.assetsUri
  public tags: ITagInfo[] = []
  constructor(
    private httpRequestService: HttpRequestService,
    private tools: ToolFunc,
  ) { }
  ngOnInit() {
    this.getTags()
  }
  getTags() {
    this.httpRequestService.httpGet('/articles/tags')
      .subscribe(
        (val: IHttpRecords) => {
          this.tags = val.records
        }
      )
  }
  goto(code?: number) {
    if (code) {
      this.tools.goto(`?code=${code}`)
    } else {
      this.tools.goto('/home')
    }
  }
}
