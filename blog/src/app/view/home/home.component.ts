import { Component, OnInit } from '@angular/core'
import { HttpRequestService } from '../../utils/httpRequest.service'
import { Router, NavigationEnd, RouterEvent } from '@angular/router'
import { filter } from 'rxjs/operators'
import { ToolFunc } from '../../utils/helper'
import { ITagInfo, IArticleRecordWithTag, IHttpRecords, IHomeHash } from './home.interface'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public articleList: IArticleRecordWithTag[] = []
  public totalSize = 0
  public pageSize = 0
  public startPage = 0
  constructor(
    private httpRequestService: HttpRequestService,
    private router: Router,
    private tools: ToolFunc,
  ) { }
  ngOnInit() {
    const code = this.getHashData(location ? location.href : {}).code
    this.watchUrlChange()
    this.getArticleList(Number(code))
  }
  private watchUrlChange() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    )
    .subscribe(event => {
      const hashData = this.getHashData(event.url)
      const code = Number(hashData.code)
      this.getArticleList(code)
    })
  }
  private getHashData(url): IHomeHash {
    const hashUrl = url.split('?')[1]
    if (!hashUrl) {
      return {
        code: ''
      }
    }
    const hashData: IHomeHash = {
      code: ''
    }
    hashUrl.split('&')
      .forEach(v => hashData[v.split('=')[0]] = v.split('=')[1])
    return hashData
  }
  private getArticleList(code?: number) {
    const requestUri = code ? `/articles/10/1/${code}` : '/articles/10/1'
    this.httpRequestService.httpGet(requestUri)
      .subscribe(
        (val: IHttpRecords) => {
          this.articleList = val.records.data
          this.totalSize = val.records.total
          this.startPage = val.records.startPage
          this.pageSize = val.records.pageSize
        }
      )
  }
  private goto(id: number) {
    this.tools.goto(`/article/${id}`)
  }
}
