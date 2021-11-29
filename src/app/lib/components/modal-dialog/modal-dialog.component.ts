import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-modal-dialog',
  templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent {

  @Input()
  isOpen: boolean = false;

  @Output()
  readonly isOpenChange = new EventEmitter<boolean>();


  @Input()
  title: string ="";


  onClose(){
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

}
