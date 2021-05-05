import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-listproductwithasync',
  templateUrl: './listproductwithasync.component.html',
  styleUrls: ['./listproductwithasync.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListproductwithasyncComponent implements OnInit {
  @Input() productitems : Observable<Product[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
