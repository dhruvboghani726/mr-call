import { AfterViewInit, Component, OnInit } from '@angular/core';

/*
 *FAQ component 
 */
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

/*
 *Class : FAQ
 *Reference link:  
 */
export class FaqComponent implements AfterViewInit {
  step = 0;

  constructor() { }

  ngAfterViewInit() {
    // Scrolls to top of Page after page view initialized
    // let top = document.getElementById('top');
    // if (top !== null) {
    //   top.scrollIntoView();
    //   top = null;
    // }
  }

  //exapnsion step
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
