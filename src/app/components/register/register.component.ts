import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('myTabs', {static: true}) tabRef: any;
  constructor() { }

  ngOnInit() { }
  doSomething(myTabs) {
    alert('clic')
    console.log(myTabs.getSelected());
    // this.events.publish('refresh:channels', Date.now());
  }
}
