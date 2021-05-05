import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
 productdelete:Product;
  loginForm: FormGroup;
  constructor(private appservice:AppService) { 
  this.loginForm = new FormGroup({
    id: new FormControl('',[Validators.required]),
  })
  }

  ngOnInit(): void {
  }

  submit(){
    let productdelete= this.loginForm.value;
    console.log(productdelete);
    this.appservice.deleteProduct(productdelete.id).subscribe();
    this.reset();
  }
  reset()
  {
    this.loginForm.reset();
  }
}
