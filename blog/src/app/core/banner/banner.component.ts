import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit, AfterViewInit, OnDestroy {
  picList: string[] = [
    '../../../assets/images/bg2.png',
    '../../../assets/images/bg0.jpg',
    '../../../assets/images/bg1.jpg',
    '../../../assets/images/bg3.jpg',
    '../../../assets/images/bg2.png',
  ]
  timer: number
  @ViewChild('header') h
  constructor() { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.initScroll()
  }
  ngOnDestroy(): void {
    cancelAnimationFrame(this.timer)
  }
  initScroll() {
    const h = this.h.nativeElement
    h.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll() {
    const h = this.h.nativeElement
    if (h.scrollTop >= h.offsetHeight * 4) {
      h.scrollTo({
        top: 0
      })
    }
  }
}
