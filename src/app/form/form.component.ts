import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public Disable = true;
  public fname = "";
  public lname = "";
  public email = "";
  
  

  constructor() { }
  
  ngOnInit(): void {
  }

  
  onClick()
  {
     alert("Fields Will be Enabled!!");
     this.Disable=false;
  }


  countryData = [{"country":"India"}, {"country": "China"}, {"country": "America"}, {"country": "Africa"}];

}
