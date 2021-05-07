import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteProductDefaultComponent } from './delete-product-default/delete-product-default.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { EachitemComponent } from './eachitem/eachitem.component';
import { EditProductDefaultComponent } from './edit-product-default/edit-product-default.component';
import { HomeComponent } from './home/home.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {
    path: 'products',
    component : HomeComponent
  },
  {
    path : 'product/add',
    component : AddproductComponent
  },
  {
    path : 'product/edit/:id',
    component : UpdateproductComponent
  },
  {
    path : 'product/delete/:id',
    component : DeleteproductComponent
  },
  {
    path : 'product/:id',
    component : EachitemComponent
  },
  {
    path: 'updateproduct',
    component : EditProductDefaultComponent
  },
  {
    path: 'deleteproduct',
    component : DeleteProductDefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
