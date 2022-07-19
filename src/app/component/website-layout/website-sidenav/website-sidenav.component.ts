import { animate, state, style, transition, trigger } from '@angular/animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, takeUntil, throttleTime } from 'rxjs/operators';


enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down',
  Original = 'Original',
  None = 'None'
}

@Component({
  selector: 'app-website-sidenav',
  templateUrl: './website-sidenav.component.html',
  styleUrls: ['./website-sidenav.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state(VisibilityState.Visible, style({
        transform: 'translateY(0)', opacity: 1
      })),
      state(VisibilityState.Hidden, style({
        transform: 'translateY(0)', opacity: 0 // adjust this to the height of your header
      })),
      transition(`${VisibilityState.Visible} => ${VisibilityState.Hidden}`, animate('500ms')),
      transition(`${VisibilityState.Hidden} => ${VisibilityState.Visible}`, animate('250ms'))
    ])
  ]
})

/*
* class : HeaderComponenet
* Purpose : Header dispaly on the website
*/
export class WebsiteSidenavComponent implements AfterViewInit, OnDestroy {

  //Responsive View
  private isVisible = true;
  wheelHandler: any;
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  //Default Construction
  constructor(public router: Router) {
  }


  private destroy$: Subject<boolean> = new Subject<boolean>();
  isHeader2Visible = VisibilityState.Hidden;
  slideHeader2InAtPosition = 200;
  slideHeaderInAtPosition = 30;

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.wheelHandler = this.Getstarted.bind(this);
  }

  ngAfterViewInit() {
    // create an observable stream of scroll positions and map them to UP / DOWN directions
    // const content = document.querySelector('.content-router');
    // const scroll$ = fromEvent(content, 'scroll').pipe( // if the scroll events happen on your window you could use 'window' instead of 'content' here
    //   throttleTime(10),
    //   map(() => content.scrollTop), // if you used 'window' above replace 'content.scrollTop' with 'window.pageYOffset'
    //   pairwise(),
    //   map(([ y1, y2 ]): Direction => {
    //     return (y2 <= this.slideHeader2InAtPosition ? Direction.Up : (y2 > this.slideHeaderInAtPosition ? Direction.Down : Direction.None));
    //   }),
    //   distinctUntilChanged(),
    //   takeUntil(this.destroy$)
    // );
    // // subscribe to the UP / DOWN scroll direction stream and set the header state accordingly
    // scroll$.subscribe(dir => {
    //   const divMessages: HTMLDivElement = document.querySelector(".getstarted");

    //   if (dir === Direction.Down) {
    //     this.isHeader2Visible = VisibilityState.Visible;
    //     divMessages.style.cssText = `cursor: pointer;`
    //     document.getElementById("getstarted").addEventListener('click', this.wheelHandler);
    //   } else {
    //     this.isHeader2Visible = VisibilityState.Hidden;
    //     divMessages.style.cssText = `cursor: auto;`
    //     document.getElementById("getstarted").removeEventListener('click', this.wheelHandler);
    //   }
    // });

  }

  //Get started button redirect to login page
  Getstarted() {
    this.gotologin()
  }

  // scroll to contact us link
  ContactUs() {
    document.getElementById("footer").scrollIntoView();
  }

  // go to login page
  gotologin() {
    this.router.navigate(['/mr/mr-login']);
  }
  timedOutCloser;

}
