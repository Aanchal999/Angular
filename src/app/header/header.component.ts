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
  
  isDisplay=false;
  toggleDisplay()
  {
    this.isDisplay=!this.isDisplay;
  }
  headerData = [{"item1":"Home"}, {"item2": "About"}, {"item3": "Services"}, {"item4": "Contact"}];

}
