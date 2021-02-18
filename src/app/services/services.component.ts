import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
 public email: string ='';
 public password: string ='';
  postData(){

    let url="http://httpbin.org/post"

    this.http.post(url,{
      email:this.email,
     password:this.password

    }).toPromise().then((data:any) => {
      console.log(data)
    })

  }

}
