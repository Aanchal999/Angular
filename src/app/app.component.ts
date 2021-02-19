import { Component } from '@angular/core';
import { CommonDTO } from './common/types/commonDTO';
import { GetcallService } from './get-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mind';


constructor(private api: GetcallService){}
public print:CommonDTO[]=[];
 ngOnInit(): void{

  

  /*this.api.getCall().subscribe((data)=>{
    console.log(JSON.stringify(data,null,4));
  });*/
}
}