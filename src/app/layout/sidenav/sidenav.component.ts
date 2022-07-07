import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';

import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { OfflinedialogComponent } from '~app/layout/sidenav/offlinedialog/offlinedialog.component';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

/*
 *Sidenav component 
 */
@UntilDestroy()
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})

/*
 *Class : Sidenav
 *Reference link:
 */
export class SidenavComponent implements OnDestroy {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  @Input()
  checked: Boolean
  autoRenew = true;
  value
  hide;
  notificationList;
  patientcount;
  public error: string;
  mobileQuery: MediaQueryList;
  currentUser;
  currentDoctor;
  currentAdmin;
  count;
  results;
  Notificationinterval;
  hoverIndex: any;
  countnumber;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  userinfo = "patient"
  doctorinfo = JSON.parse(localStorage.getItem('currentDoctor'));
  mrinfo = JSON.parse(localStorage.getItem('currentMr'));
  // doctorinfo = null
  // admininfo = null
  status: any
  notiList;
  isExpanded = true;
  checkstatus = "Online"
  pages = [
    {
      name: 'Smart ',
      link: '/smart',
      icon: 'crop_landscape',
      id: 'markRectangle',
      children: [
        {
          name: 'Show More',
          link: '/smart',
          icon: 'crop_landscape',
          id: 'markRectangle',
          children: [

          ]
        }
      ]
    },
    {
      name: 'Shop',
      link: '/options',
      icon: 'crop_landscape',
      id: 'markRectangle'
    },
  ];
  fillerContent = Array.from({ length: 50 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       labor0is nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;
  messages = [];
  doctorstatus;
  public useDefault;
  today = new Date();
  newstatus;
  allDetalis
  constructor(private observer: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog,
    private router: Router,

    private location: Location,
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);



  }

  //Status toggle
  public toggle(event: MatSlideToggleChange) {
    this.useDefault = event.checked;
    if (this.useDefault === true) {
      var status = 'Online'
      this.doctorStatus(status)
      this.getbreakTimeend()
    }
    if (this.useDefault === false) {
      var status = 'Offline'
      this.doctorStatus(status)

    }
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
      return true;
    } else {
      return false;
    }
  }

  //consulting dialog open
  openDialog() {

  }

  users;
  doctors;
  admin;

  //Patient logout
  logout() {

  }

  //Doctor logout
  doctorlogout() {

  }

  //Admin logout
  adminlogout() {

  }

  ngOnInit() {

  }

  //Doctor status api
  doctorStatus(Status) {


  }

  //stop notification
  stopNotificationinterval() {
    clearInterval(this.Notificationinterval);
  }

  //Status api
  Status() {


  }

  //Offline dialog open
  openDialogOffline(obj) {
    const dialogRef = this.dialog.open(OfflinedialogComponent, {
      width: '400px',
      data: obj,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  //Get data by id
  getDataByid() {

  }

  // notification list api
  getNotificationList() {

  }

  //Notofication read
  IsNotificationRead(notification) {


  }
  enter(index) {
    this.hoverIndex = index;
  }

  leave() {
    this.hoverIndex = null;
  }

  //Get break time
  getbreakTimeend() {

  }

  // utc to local
  getNowUTC(newdate) {

    var temp = new Date(
      newdate);
    return temp.toISOString();
  }

  doctorstatuscheck() {

  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        console.log(res)
        if (res.matches) {
          console.log(res.matches)
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}

