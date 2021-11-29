import { ChangeDetectionStrategy, Component, Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-drop-down',
  templateUrl: './drop-down.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownComponent implements OnInit {

  @Input()
  isOpen: boolean = false;

  @Output()
  readonly isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  rect: {top?: number|undefined, left?: number|undefined, width?:number|undefined} = {};

  rootElement: HTMLElement;

  popupElement !: HTMLElement;

  constructor(er: ElementRef){
    this.rootElement = er.nativeElement;
  }

  private syncRect(){
    const r = this.rootElement.getBoundingClientRect();
    this.rect.left = r.left;
    this.rect.top = r.top;
    this.rect.width = r.width;
  }

  ngOnInit(): void {
    if(this.isOpen){
      this.syncRect();
    }
  }

  toggle(){
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
    if(this.isOpen){
      this.syncRect();
    }
  }

  @HostListener('window:click', ['$event.target'])
  @HostListener('window:mousedown', ['$event.target'])
  @HostListener("window:mousewheel", ['$event.target'])
  onGlobalClick(targetElement: HTMLElement): void {
    if (!targetElement && !this.popupElement) {
        return;
    }
    if(this.popupElement != null){
      let clickedInside = this.popupElement === targetElement || this.popupElement.contains(targetElement);
      if(!clickedInside){
        clickedInside = this.rootElement === targetElement || this.rootElement.contains(targetElement);
      }
      if (!clickedInside && this.isOpen) {

        this.isOpen = false;
        this.isOpenChange.emit(this.isOpen);
      }
    }
  }

}

@Directive({selector: "lib-drop-down-label"})
export class DropDownLabelDirective{}

@Directive({selector: "lib-drop-down-label-opened"})
export class DropDownLabelOpenedDirective{}

@Directive({selector: "lib-drop-down-content"})
export class DropDownContentDirective{}
