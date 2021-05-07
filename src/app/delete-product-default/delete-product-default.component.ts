import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-delete-product-default',
  templateUrl: './delete-product-default.component.html',
  styleUrls: ['./delete-product-default.component.css']
})
export class DeleteProductDefaultComponent implements OnInit {

  loginForm: FormGroup;
  items: Observable<Product[]>;
  id: number;
  showotherfields: boolean = false;

  constructor(private appservice: AppService,private datePipe:DatePipe,private snackbar:MatSnackBar) {
    this.loginForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
    }),
    this.items = new Observable<Product[]>();
    this.loginForm = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      Quantity: new FormControl([Validators.min(0)]),
      Color: new FormControl('', [Validators.required]),
      expirydate: new FormControl({value:null,disabled:true}, [Validators.required]),
      instock: new FormControl({value:true,disabled:true}, [Validators.required]),
    })
  }

  transformDate(date:Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }


  ngOnInit(): void {
    this.items = this.appservice.getProductItems();
  }

  submit(message:string,action:any) {
    this.appservice.deleteProduct(this.id).subscribe();
    this.snackbar.open(message,action);
  }

  search() {
    this.showotherfields = true;
    this.appservice.getProduct(this.id).subscribe(
      data => {
        console.log(data);
        this.loginForm.get('Title')?.setValue(data.title);
        this.loginForm.get('Quantity')?.setValue(data.quantity);
        this.loginForm.get('Color')?.setValue(data.color);
        this.loginForm.get('expirydate')?.setValue(this.transformDate(data.expiryDate));
        this.loginForm.get('instock')?.setValue(data.inStock);
      }
    );
  }


}
