import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductwithsubscribeComponent } from './listproductwithsubscribe/listproductwithsubscribe.component';
import { ListproductwithasyncComponent } from './listproductwithasync/listproductwithasync.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ListproductwithmattableComponent } from './listproductwithmattable/listproductwithmattable.component';
import { MatTableModule } from '@angular/material/table';
import { EachitemComponent } from './eachitem/eachitem.component';
import { EditProductDefaultComponent } from './edit-product-default/edit-product-default.component';
import { DeleteProductDefaultComponent } from './delete-product-default/delete-product-default.component';
import { DatePipe } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddproductComponent,
    ListproductwithsubscribeComponent,
    ListproductwithasyncComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    ListproductwithmattableComponent,
    EachitemComponent,
    EditProductDefaultComponent,
    DeleteProductDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
