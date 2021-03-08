import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public service : LoginService) { }

  x:string="welcome to the page";
  show():void {
    console.log(this.x);
  }
  ngOnInit(): void 
  {
    alert("page loaded");

    this.show();
    this.logIn=!this.logIn;
  }

  logIn:boolean=false;
  buttonItemT:string="Sign up";
  buttonItemF:string="Log out";
  onClick(){
    this.logIn=!this.logIn;
  }

  headerData = [{"item1":"Home"}, {"item2": "About"}, {"item3": "Services"}, {"item4": "Contact"}];

}
