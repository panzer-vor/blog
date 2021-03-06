import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable()
export class HttpRequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'
    })
  }
  constructor(private httpClient: HttpClient) {}
  httpGet(reqUrl: string) {
    return this.httpClient.get(`${environment.httpConfig.baseUri}${reqUrl}`, this.httpOptions)
  }
}
