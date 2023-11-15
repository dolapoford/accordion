import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AccordionItem } from './accordion/accordion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // accordionItems = [
  //   { header: 'What is Web Development?', content: 'Web Development broadly refers to...' },
  //   { header: 'What is Web Development?', content: 'Web Development broadly refers to...' },
  //   { header: 'What is Web Development?', content: 'Web Development broadly refers to...' }
  // ];
  accordionItems: AccordionItem[] = [
    {  expanded: false },
    // {   expanded: false },
    // {  expanded: false }
  ];
  title = 'comment';
 
 constructor() { }

 ngOnInit(): void {
 }
 
}
