import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  @Input() quote: Quote;
  
  constructor(private elem: ElementRef) { }

  private highlightQuote() {
    this.elem.nativeElement.style.backgroundColor="yellow"
  }

}
