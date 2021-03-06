import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../Product';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})

export class UpdateproductComponent implements OnInit {
  id : any;
  loginForm: FormGroup;
  constructor(private appservice:AppService,private route:ActivatedRoute,private datePipe:DatePipe,private snackbar:MatSnackBar) { 
  this.loginForm = new FormGroup({
    Id: new FormControl('',[Validators.required]),
    Title: new FormControl('', [Validators.required]),
    Quantity : new FormControl([Validators.min(0)]),
    Color: new FormControl('', [Validators.required]),
    expirydate : new FormControl('',[Validators.required]),
    instock: new FormControl(true, [Validators.required]),
  })
  this.id = this.route.snapshot.paramMap.get('id'),
  console.log(this.id)
  }

  transformDate(date:Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.appservice.getProduct(this.id).subscribe(
      data => {
        console.log(data);
        this.loginForm.get('Id')?.setValue(data.id)
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
    product.id = parseInt(this.id);
    console.log(product);
    this.appservice.putProduct(product).subscribe();
    this.snackbar.open(message,action);
  }

}
