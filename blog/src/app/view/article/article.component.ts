import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../utils/httpRequest.service'
interface IHttpRecords {
  success: boolean
  records: IArticle
}
interface IArticle {
  accessAuthority: number
  article: string
  cover: string
  createTime: string
  desc: string
  tags: string
  title: string
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public article: IArticle | {} = {}
  constructor(
    private httpRequestService: HttpRequestService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getArticle()
  }
  public getArticle() {
    const id = this.activatedRoute.snapshot.params['id']
    this.httpRequestService.httpGet(`/articles/${id}`)
      .subscribe(
        (val: IHttpRecords) => {
          this.article = val.records
        }
      )
  }
}
