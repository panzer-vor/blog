import { Injectable } from '@angular/core';

@Injectable()
export class ToolFunc {

  constructor() { }

  HrefTo() {
    return (url) => {
      window.location.href = url
    }
  }
}
