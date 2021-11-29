import { ApplicationRef, ComponentFactoryResolver, Injectable, TemplateRef, ViewContainerRef } from "@angular/core";
import { PopupHostComponent } from "../components/popup-host/popup-host.component";


export type PopupRect = {
  top?: number,
  left?: number,
  bottom?: number,
  right?: number,
  height?: number|undefined,
  width?: number|undefined,
  zIndex?: number|undefined
}

export type PopupData = {
  readonly tr: TemplateRef<any>,
  readonly rect: PopupRect,
  readonly overlay: boolean
}

@Injectable()
export class PopupService {

  private _hostComponent: PopupHostComponent|null = null;

  private readonly _popups: PopupData[] = [];

  constructor(
    private appRef: ApplicationRef,
    private factoryResolver: ComponentFactoryResolver){
  }

  private initializeHost(){
    if(this._hostComponent){
      return;
    }
    const root = this.appRef.components[0];
    const popupHostFactory = this.factoryResolver.resolveComponentFactory(PopupHostComponent)
    var rootViewContainer = root.injector.get(ViewContainerRef);
    const popupHostComponentRef = popupHostFactory.create(root.injector);
    rootViewContainer.insert(popupHostComponentRef.hostView);
    this._hostComponent = popupHostComponentRef.instance;
    this._hostComponent.update(this._popups);
  }

  set(tr: TemplateRef<any>, rect: PopupRect, overlay: boolean|any){
    this.initializeHost();

    this._popups.push({tr, rect, overlay});
    this._hostComponent?.update(this._popups);
  }

  remove(tr: TemplateRef<any>){
    const i = this._popups.findIndex(p=>p.tr === tr);
    if(i>=0){
      this._popups.splice(i, 1);
    }
    this._hostComponent?.update(this._popups);
  }
}
