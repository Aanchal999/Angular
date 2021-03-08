import { Component, OnInit } from '@angular/core';
import { CommonDTO } from '..//common/types/commonDTO';
import { GetcallService } from '../get-call.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private call_data:GetcallService) { }
  public print:CommonDTO[]=[]
  ngOnInit(): void {
    this.call_data.getCall().subscribe(data=>this.print=data as any);
  }

}
