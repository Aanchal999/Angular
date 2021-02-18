import { Component } from '@angular/core';
import { GetcallService } from './get-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mind';


constructor(private api: GetcallService){}

 ngOnInit(): void{
  this.api.getCall().subscribe((data)=>{
    console.log(JSON.stringify(data,null,4));
  })
}
}