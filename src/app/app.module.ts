import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './login/login.component'
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { PopupModule } from '@progress/kendo-angular-popup';
import { LibModule } from './lib/lib.module';
import { SlotmatcineComponent } from './slotmatcine/slotmatcine.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SlotmatcineComponent,
    LoginComponent,

  ],
  imports: [
    LibModule,
    PopupModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
