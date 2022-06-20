import { Component, OnInit } from '@angular/core';

/*
 *Common layout component 
 */
@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: [ './common-layout.component.scss' ]
})

/*
 *Class : Common layout
 *Reference link:  
 */
export class CommonLayoutComponent implements OnInit {

  constructor() {
    localStorage.setItem('lastAction', Date.now().toString());
  }

  ngOnInit(): void {
  }

  async onRoomChanged(roomName: string) {
  }
}
