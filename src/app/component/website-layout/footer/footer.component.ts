import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

/*
 *Footer component 
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})

/*
 *Class : Footer
 *Reference link:  
 */
export class FooterComponent implements OnInit, AfterViewChecked {
  fragment;
  routerScroll: any;

  constructor(
    public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerScroll = this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  //scroll to services
  ngAfterViewChecked(): void {
    try {
      if (this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView();
      }
    } catch (e) { }
  }
  toTop() {
    setTimeout(() => {

      this.router.navigateByUrl('/website/home')
    }, 1);

  }

  //login redirect
  gotologin() {
 
  }
}
