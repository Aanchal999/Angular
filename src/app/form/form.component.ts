import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  
  public fname = "";
  public lname = "";
  public Pno = "";
  public email = "";
 
  constructor() { }

  form_data=[{"firstname":"","lastname":"","phone":"","email":"","password":"","address1":"","address2":""}]
  
  ngOnInit(): void {
  }
   

  
  onSubmit() {
    alert(JSON.stringify(this.form_data))
  }
  countryData = [{"country":"India"}, {"country": "China"}, {"country": "America"}, {"country": "Africa"}];
  cityData = [{"city":"Lucknow"}, {"city": "Varansi"}, {"city": "Noida"}, {"city": "Gaziabad"}];
  stateData = [{"state":"Uttar Pradesh"}, {"state": "Gujrat"}, {"state": "Maharashtra"}, {"state": "Rajasthan"}];

}
