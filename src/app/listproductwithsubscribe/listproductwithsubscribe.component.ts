import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Product } from '../Product';

@Component({
  selector: 'app-listproductwithsubscribe',
  templateUrl: './listproductwithsubscribe.component.html',
  styleUrls: ['./listproductwithsubscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListproductwithsubscribeComponent implements OnInit {
  @Input() productitems: Observable<Product[]>;
  product: Product[];
  productsub: Subscription;
  constructor(private cd: ChangeDetectorRef) {
    this.product = [];
    this.productsub = new Subscription();
  }

  // ngOnInit(): void {
  //   this.productsub = this.productitems.subscribe(
  //     data => {
  //       this.product = data;
            // this.cd.markForCheck();

            // console.log(this.product);
  //     },
  //   )
  //   this.cd.markForCheck()
  //   console.log(this.product)
  // }

  ngOnInit() {
    this.productsub = this.productitems.subscribe(
      data => {
        this.product = data;
        this.cd.markForCheck();
        console.log(this.product);
      }
    ),
      (error: any) => {
        console.log(error);
      },
      () => console.log('complete')
  }

  // ngOnChanges(): void {
  //   this.productsub=this.productitems.subscribe(

  //     data=>this.product=data)

  //     this.cd.markForCheck();

  // }

  // ngOnChanges(): void {
  //   this.productsub= this.productitems.subscribe(
  //   data=>{this.product= data},
  //   this.cd.markForCheck();
  //   error=>{
  //     console.log(error);
  //   },
  //   ()=>console.log('complete')

  // )
}


