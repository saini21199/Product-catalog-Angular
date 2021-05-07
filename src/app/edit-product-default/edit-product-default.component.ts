import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product-default',
  templateUrl: './edit-product-default.component.html',
  styleUrls: ['./edit-product-default.component.css']
})
export class EditProductDefaultComponent implements OnInit {
  id:any;
  loginForm: FormGroup;
  items: Observable<Product[]>;
  showotherfields:boolean=false;
  constructor(private appservice:AppService,private datePipe: DatePipe,private snackbar:MatSnackBar) { 
  this.loginForm = new FormGroup({
    Id: new FormControl('',[Validators.required]),
    Title: new FormControl('', [Validators.required]),
    Quantity : new FormControl([Validators.min(0)]),
    Color: new FormControl('', [Validators.required]),
    expirydate : new FormControl('',[Validators.required]),
    instock: new FormControl(true, [Validators.required]),
  })
  }

  transformDate(date:Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.items = this.appservice.getProductItems();
  }

  search() {
    this.showotherfields = true;
    this.appservice.getProduct(this.id).subscribe(
      data => {
        console.log(data);
        this.loginForm.get('Id')?.setValue(data.id);
        this.loginForm.get('Title')?.setValue(data.title);
        this.loginForm.get('Quantity')?.setValue(data.quantity);
        this.loginForm.get('Color')?.setValue(data.color);
        this.loginForm.get('expirydate')?.setValue(this.transformDate(data.expiryDate));
        this.loginForm.get('instock')?.setValue(data.inStock);
      }
    );
  }

  submit(message:string,action:any){
    let product :Product ={...this.loginForm.value};
    console.log(product);
    this.appservice.putProduct(product).subscribe();
    this.snackbar.open(message,action);
  }
}
