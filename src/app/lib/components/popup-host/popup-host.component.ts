import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { PopupData } from '../../services/popup.service';

@Component({
  selector: 'lib-popup-host',
  templateUrl: './popup-host.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupHostComponent {

  popups: PopupData[]=[];

  constructor(private readonly _cd: ChangeDetectorRef) { }

  update(popups: PopupData[]) {
    this.popups = popups;
    this._cd.detectChanges();
  }


  isCenter(p: PopupData): boolean{
    return p.overlay
      && p.rect.left == null
      && p.rect.right == null
      && p.rect.top == null
      && p.rect.bottom == null;
  }
}
