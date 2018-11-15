import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 @Input()
 showSideBar : boolean= false;

 @Output()
 showSideBarCahnge : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  afficherBar(){
    this.showSideBar = !this.showSideBar;
    this.showSideBarCahnge.emit(this.showSideBar);
  }

}
