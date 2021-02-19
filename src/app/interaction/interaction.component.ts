import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  
  @Input() public parentData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
