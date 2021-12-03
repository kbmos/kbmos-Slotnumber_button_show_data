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
    let audio = new Audio();
    audio.src = "../assets/sounds/Mouse-Click-00-c-FesliyanStudios.com2.mp3";
    audio.load();
    audio.play();
    this.isOpen = false;

    this.isOpenChange.emit(this.isOpen);
  }

}
