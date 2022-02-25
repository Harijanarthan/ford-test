import { Component, OnInit } from '@angular/core';
import { mockData } from './mock';

@Component({
  selector: 'app-ford-landing-page',
  templateUrl: './ford-landing-page.component.html',
  styleUrls: ['./ford-landing-page.component.scss']
})
export class FordLandingPageComponent implements OnInit {
  
  MockData:any = mockData;
  constructor() { }

  ngOnInit(): void {
    console.log('MockDAta:',this.MockData)
  }

}
