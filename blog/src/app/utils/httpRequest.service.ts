import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

const options: any = environment
@Injectable()
export class HttpRequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'
    })
  }
  constructor(private httpClient: HttpClient) {}
  httpGet(reqUrl) {
    return this.httpClient.get(`${options.httpConfig.baseUri}${reqUrl}`, this.httpOptions)
  }
}
