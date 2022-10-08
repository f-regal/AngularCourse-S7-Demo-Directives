import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[betterHighlightDirective]'
})
export class BetterHighlightDirective {

  @Input() defaultColor: string 
  @Input() highlightColor: string

  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
  }
}


