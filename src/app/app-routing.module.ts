import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './login/login.component';
import {SlotmatcineComponent} from './slotmatcine/slotmatcine.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Slotmatcine', component: SlotmatcineComponent }



]
@NgModule({
  imports: [RouterModule.forRoot(routes),MatButtonModule ],
  exports: [RouterModule,MatButtonModule]
})
export class AppRoutingModule { }
