import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  public phone: string ='';
  dataPost(){

    let url="http://httpbin.org/post"

    this.http.post(url,{
      phone:this.phone

    }).toPromise().then((data:any) => {
      console.log(data)
    })

  }

}
