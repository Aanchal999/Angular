import { Component, OnInit } from '@angular/core';
import { GetcallService } from './get-call.service';
import { CommonDTO } from '../common/types/commonDTO';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private call_data:GetcallService) { }
  public print:CommonDTO[]=[]
  ngOnInit(): void {
    this.call_data.getCall().subscribe(data=>this.print=data);
  }

}
