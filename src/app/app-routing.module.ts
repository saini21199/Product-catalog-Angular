import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { HomeComponent } from './home/home.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path : 'addproduct',
    component : AddproductComponent
  },
  {
    path : 'updateproduct',
    component : UpdateproductComponent
  },
  {
    path : 'deleteproduct',
    component : DeleteproductComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
