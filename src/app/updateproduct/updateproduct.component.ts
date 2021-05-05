import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private appservice:AppService) { 
  this.loginForm = new FormGroup({
    Id: new FormControl('',[Validators.required]),
    Title: new FormControl('', [Validators.required]),
    Quantity : new FormControl([Validators.min(0)]),
    Color: new FormControl('', [Validators.required]),
    expirydate : new FormControl('',[Validators.required]),
    instock: new FormControl(true, [Validators.required]),
  })
  }

  ngOnInit(): void {
  }

  submit(){
    let product :Product ={...this.loginForm.value};
    this.appservice.putProduct(product).subscribe();
  }

}
