import { Component, OnInit } from '@angular/core'
import { HttpRequestService } from '../../utils/httpRequest.service'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'

interface IHttpRecords {
  success: boolean
  records: any
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public articleList = []
  public totalSize = 0
  public pageSize = 0
  public startPage = 0
  public routerUri = environment.options.routerUri
  constructor(
    private httpRequestService: HttpRequestService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getArticleList()
  }
  private getArticleList() {
    if (typeof(window) === 'undefined') {
      this.httpRequestService.httpGet('/articles/10/1')
        .subscribe(
          (val: IHttpRecords) => {
            this.articleList = val.records.data
            this.totalSize = val.records.total
            this.startPage = val.records.startPage
            this.pageSize = val.records.pageSize
          }
        )
    }
  }
  private goto(id) {
    this.router.navigateByUrl(`${this.routerUri}/article/${id}`)
  }
}
