import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
  ]
})
export class ArticleComponent implements OnInit {
  constructor(@Inject('BASE_CONFIG') config) {
    console.log(config)
  }

  ngOnInit() {
  }
  onClick() {
  }
}
