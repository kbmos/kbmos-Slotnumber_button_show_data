import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropDownLabelDirective } from "./components/drop-down/drop-down.component";
import { DropDownLabelOpenedDirective } from "./components/drop-down/drop-down.component";
import { DropDownContentDirective } from "./components/drop-down/drop-down.component";
import { DropDownComponent } from "./components/drop-down/drop-down.component";
import { PopupHostComponent } from "./components/popup-host/popup-host.component";
import { PopupRectDirective } from "./directives/popup-rect.directive";
import { PopupService } from "./services/popup.service";
import { LifeCycleDirective } from './directives/life-cycle.directive';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupHostComponent,
    PopupRectDirective,
    DropDownComponent,
    DropDownLabelDirective,
    DropDownLabelOpenedDirective,
    DropDownContentDirective,
    LifeCycleDirective,
    ModalDialogComponent
  ],
  exports: [
    PopupRectDirective,
    DropDownComponent,
    DropDownLabelDirective,
    DropDownLabelOpenedDirective,
    DropDownContentDirective,
    ModalDialogComponent
  ],
  providers: [
    PopupService
  ],
  bootstrap: [
  ]
})
export class LibModule {
}
