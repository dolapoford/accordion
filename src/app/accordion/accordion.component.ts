import { Component, OnInit,Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {



  ngOnInit(): void {
  }

  @Input() items: AccordionItem[] = [];



  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleItem(index: number): void {
    this.items[index].expanded = !this.items[index].expanded;
  }

  getContentHeight(index: number): number {
    const body = this.el.nativeElement.querySelectorAll('.accordion-item-body')[index];
    return this.items[index].expanded ? body.scrollHeight : 0;
  }
}

export interface AccordionItem {
 
 
  expanded: boolean;
}