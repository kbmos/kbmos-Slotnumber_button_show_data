import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatButtonModule ],
  exports: [RouterModule,MatButtonModule]
})
export class AppRoutingModule { }
