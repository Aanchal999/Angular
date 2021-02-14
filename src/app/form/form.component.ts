import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

 
  constructor() { }

  form_data=[{"firstname":"","lastname":"","phone":"","email":"","password":"","address1":"","address2":""}]
  countryData = [{"country":"India"}, {"country": "China"}, {"country": "America"}, {"country": "Africa"}];
  cityData = [{"city":"Lucknow"}, {"city": "Varansi"}, {"city": "Noida"}, {"city": "Gaziabad"}];
  stateData = [{"state":"Uttar Pradesh"}, {"state": "Gujrat"}, {"state": "Maharashtra"}, {"state": "Rajasthan"}];
  
 ngOnInit(){
    /*this.stateData = this.selectService.getstateData();
    this.onSelect(this.selectedstate.id);*/
  }

  /*onSelect(stateid) {
    this.cityData = this.selectService.getStates().filter((item) => item.stateid == stateid);
  }*/
   
  onSubmit() {
    alert(JSON.stringify(this.form_data))
  }


}
