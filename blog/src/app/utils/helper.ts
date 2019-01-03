import { Injectable } from '@angular/core';

@Injectable()
export class ToolFunc {

  constructor() { }

  goto() {
    return (url) => {
      window.location.href = url
    }
  }
}
