import { Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[libLifeCycle]'
})
export class LifeCycleDirective {
    @Output()
    readonly onInit = new EventEmitter<void>();

    @Output()
    readonly onDestroy = new EventEmitter<void>();

    ngAfterViewInit(): void { this.onInit.emit(); }

    ngOnDestroy(): void { this.onDestroy.emit(); }
}
