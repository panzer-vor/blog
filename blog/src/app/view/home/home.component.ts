import { Component, OnInit, Inject } from '@angular/core'
import { HttpRequestService } from '../../utils/httpRequest.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject('BASE_HTTP_URI') private baseUri,
    private httpRequestService: HttpRequestService,
  ) { }

  ngOnInit() {
    this.httpRequestService.httpGet(`${this.baseUri}/articles/5/1`);
  }

}
