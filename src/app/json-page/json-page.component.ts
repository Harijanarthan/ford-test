import { Component, OnInit } from '@angular/core';
import { jsonMock } from './jsonMock';

@Component({
  selector: 'app-json-page',
  templateUrl: './json-page.component.html',
  styleUrls: ['./json-page.component.scss']
})
export class JsonPageComponent implements OnInit {

  mockJsonData = jsonMock;
  str;
  constructor() { }

  ngOnInit(): void {
    // console.log('mockJsonData:',this.mockJsonData);
    this.removeProperty();
  }
  removeProperty():any{
    this.mockJsonData.response.docs.forEach(element => {
      delete element.journal;
      delete element.eissn;
      delete element.publication_date;
      delete element.article_type;
      delete element.abstract;
    });
    this.filterJson(2);
  }
  filterJson(n){
    this.mockJsonData.response.docs = this.mockJsonData.response.docs.slice(0,n);
    console.log('After Filter:',this.mockJsonData);
    this.str = JSON.stringify(this.mockJsonData);
  }
}
