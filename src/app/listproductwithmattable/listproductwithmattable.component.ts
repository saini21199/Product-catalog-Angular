import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-listproductwithmattable',
  templateUrl: './listproductwithmattable.component.html',
  styleUrls: ['./listproductwithmattable.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListproductwithmattableComponent implements OnInit {

  @Input() productitems: Observable<Product[]>;
  product: Product[];
  productsub: Subscription;
  displayedColumns: string[] = ['Id', 'Title', 'Quantity', 'Color','ExpiryDate','Instock'];

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
