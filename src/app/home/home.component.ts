import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Observable<Product[]>;

  constructor(private appservice: AppService) {
    this.items = new Observable<Product[]>();
  }

  ngOnInit() {
    this.items = this.appservice.getProductItems();
  }
}
