import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  x:string="welcome to the page";
  show():void {
    console.log(this.x);
  }
  ngOnInit(): void 
  {
    alert("page loaded");

    this.show();
  }

  public signup = false;
  public signin = true;
  onClick()
  {
     this.signin=false;
     this.signup=true;

  }

  headerData = [{"item":"Home"}, {"item": "About"}, {"item": "Services"}, {"item": "Contact"}];

}
