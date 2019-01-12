import { Component, OnInit } from '@angular/core'
import { HttpRequestService } from '../../utils/httpRequest.service'
import { Router, NavigationEnd, RouterEvent } from '@angular/router'
import { environment } from '../../../environments/environment'
import { filter } from 'rxjs/operators'
import { ToolFunc } from '../../utils/helper'
interface IHomeHash {
  code: string
}
interface IHttpRecords {
  success: boolean
  records: {
    total: number
    startPage: number
    pageSize: number
    data: IArticleRecordWithTag[]
  }
}
interface IArticleRecordWithTag {
  id: number;
  createTime: string
  accessCount: number
  title: string
  desc: string
  acessAuthority: number
  cover: string
  tags: ITagInfo[] | never[]
}
interface ITagInfo {
  code: number
  name: string
}
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
  public routerUri = environment.options.routerUri
  constructor(
    private httpRequestService: HttpRequestService,
    private router: Router,
    private tools: ToolFunc,
  ) { }
  ngOnInit() {
    this.getArticleList()
    this.watchUrlChange()
  }
  private watchUrlChange() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    )
    .subscribe(event => {
      const hashData = this.getHashData(event.url)
      if (hashData.code) {
        const code = Number(hashData.code)
        this.getArticleList(code)
      } else {
        this.getArticleList()
      }
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
    if (code) {
      this.httpRequestService.httpGet(`/articles/10/1/${code}`)
        .subscribe(
          (val: IHttpRecords) => {
            this.articleList = val.records.data
            this.totalSize = val.records.total
            this.startPage = val.records.startPage
            this.pageSize = val.records.pageSize
          }
        )
    } else {
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
  private goto(id: number) {
    this.tools.goto(`/article/${id}`)
  }
}
