import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  productdelete: Product;
  loginForm: FormGroup;
  productitems: Observable<Product[]>;
  items: Observable<Product[]>;
  id: number;
  showform: FormGroup;
  product: Product;
  showotherfields: boolean = false;
  productToDelete : any;

  constructor(private appservice: AppService,private route:ActivatedRoute,private datePipe: DatePipe,private snackbar:MatSnackBar) {
    this.loginForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
    }),
      this.items = new Observable<Product[]>();

    this.showform = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      Quantity: new FormControl([Validators.min(0)]),
      Color: new FormControl('', [Validators.required]),
      expirydate: new FormControl({value:null,disabled:true}, [Validators.required]),
      instock: new FormControl({value:true,disabled:true}, [Validators.required]),
    })
    this.productToDelete = this.route.snapshot.paramMap.get('id');
  }
  transformDate(date:Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.items = this.appservice.getProductItems();
    this.appservice.getProduct(this.productToDelete).subscribe(
      data => {
        console.log(data);
        this.showform.get('Title')?.setValue(data.title);
        this.showform.get('Quantity')?.setValue(data.quantity);
        this.showform.get('Color')?.setValue(data.color);
        this.showform.get('expirydate')?.setValue(this.transformDate(data.expiryDate));
        this.showform.get('instock')?.setValue(data.inStock);
      }
    );
  }

  submit(message:string,action:any) {
    this.appservice.deleteProduct(this.productToDelete).subscribe();
    this.snackbar.open(message,action);
  }

  reset() {
    this.loginForm.reset();
  }
}
