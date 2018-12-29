import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpRequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'
    })
  }
  constructor(private httpClient: HttpClient) {}
  httpGet(reqUrl) {
    this.httpClient.get(reqUrl, this.httpOptions)
      .subscribe(
        val => {
          console.log('get请求成功', val);
        },
        error => {
          console.log('get请求失败', error);
        }
      );
  }
}
