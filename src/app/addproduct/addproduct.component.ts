import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private appservice:AppService,private snackbar:MatSnackBar) { 
  this.loginForm = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Quantity : new FormControl([Validators.min(0)]),
    Color: new FormControl('', [Validators.required]),
    expirydate : new FormControl('',[Validators.required]),
    instock: new FormControl(true, [Validators.required]),
  })
  }

  ngOnInit(): void {
  }

  submit(message:string,action:any): void{
    let product :Product ={...this.loginForm.value};
    product.id =0;
    this.appservice.postProduct(product).subscribe();
    this.snackbar.open(message,action);
  }
}
