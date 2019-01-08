import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../utils/httpRequest.service'
interface IHttpRecords {
  success: boolean
  records: any
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
  ]
})
export class ArticleComponent implements OnInit {
  public article: any = {}
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
  // public getTime(t) {
  //   return t.split('T')[0].replace(/-/g, '/')
  // }
}
