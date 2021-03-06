import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
}


