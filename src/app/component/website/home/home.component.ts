import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

/*
* class : HomeComponenet
* Purpose : HomePage dispaly on the website
* Reference module : header,footer
*/
export class HomeComponent implements OnInit, AfterViewInit {
  symptomps: any;
  user
  symptompsSeparator: string = '';
  shownList = null;
  maxHeightForScrollContainer: number;
  @ViewChild('content') contentRef: ElementRef;

  //Banner silder images for the home Page
  speciality = [
    { 'image': '/assets/images/websitehome/icons-2.png', 'name': 'Cardiology', 'dec': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
    { 'image': '/assets/images/websitehome/icons-2.png', 'name': 'Monthly Checkup', 'dec': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { 'image': '/assets/images/websitehome/icons-2.png', 'name': 'Dental Care', 'dec': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { 'image': '/assets/images/websitehome/icons-2.png', 'name': 'Opthalmology', 'dec': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
  ];
  members: { title: string, subtitle: string, content: string, url: string }[] = [
    { title: 'By Michle John Doe', subtitle: 'Health Care That Convenient', content: 'Content here', url: '/assets/images/websitehome/Mask Group 1.png' },
    { title: 'By Michle John Doe', subtitle: 'Health Care That Convenient', content: 'Content here', url: '/assets/images/websitehome/Mask Group 3.png' },
    { title: 'By Michle John Doe', subtitle: 'Health Care That Convenient ', content: 'Content here', url: '/assets/images/websitehome/Mask Group 4.png' },

  ];
  doctors: { name: string, service: string, url: string }[] = [
    { name: 'Dr.Nafisa Flora', service: 'Orthopedis', url: '/assets/images/websitehome/Mask Group 5.png' },
    { name: 'Dr.Nafisa Flora', service: 'Orthopedis', url: '/assets/images/websitehome/Mask Group 6.png' },
    { name: 'Dr.Nafisa Flora', service: 'Orthopedis', url: '/assets/images/websitehome/Mask Group 7.png' },

  ];
  constructor(
    public router: Router) { }

  //Default initialization module
  ngOnInit(): void {
    this.getSpeciality()
  }

  //about us redirect
  goAboutUs() {
    this.router.navigate(['/website/about-us']);
  }
  ngAfterViewInit() {
    //Scrolls to top of Page after page view initialized
    // let top = document.getElementById('top');
    // if (top !== null) {
    //   top.scrollIntoView();
    //   top = null;
    // }
  }

  // Speciality split
  splitfun(abc) {
    return abc.split(',')
  }

  //Get speciality api
  getSpeciality() {

  }

  //speciality List show
  toggleList(list) {
    if (this.isListExpanded(list)) {
      this.shownList = null;
    } else {
      this.shownList = list;
    }
  };

  //speciality List expand
  isListExpanded(list) {
    this.maxHeightForScrollContainer = 140
    return this.shownList === list;
  };

  // Login page redirect
  gotologin() {
    this.user='patient'
    localStorage.setItem('currentMr', JSON.stringify(this.user));
    this.router.navigate(['/mr/mr-login']);
  }
}
