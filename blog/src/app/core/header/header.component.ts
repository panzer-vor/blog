import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  picList: string[] = [
    '../../../assets/images/bg2.png',
    '../../../assets/images/bg0.jpg',
    '../../../assets/images/bg1.jpg',
    '../../../assets/images/bg3.jpg',
    '../../../assets/images/bg2.png',
  ]
  timer: number
  @ViewChild('header') h
  @Output() toggle = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
    // console.log(this.HrefTo())
  }
  ngAfterViewInit() {
    this.initScroll()
  }
  ngOnDestroy(): void {
    cancelAnimationFrame(this.timer)
  }
  openSidebar() {
    this.toggle.emit()
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
