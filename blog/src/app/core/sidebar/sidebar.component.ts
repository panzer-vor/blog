import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'
import { HttpRequestService } from '../../utils/httpRequest.service'

interface IHttpRecords {
  success: boolean
  records: ITagInfo[]
}
interface ITagInfo {
  code: number;
  name: string;
}
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
    private router: Router,
    private httpRequestService: HttpRequestService,
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
  goto(code: number) {
    if (code) {
      console.log(code)
    } else {
      this.router.navigateByUrl(`${this.routerUri}/home`)
    }
  }
}
