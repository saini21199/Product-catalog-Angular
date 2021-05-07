import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-eachitem',
  templateUrl: './eachitem.component.html',
  styleUrls: ['./eachitem.component.css']
})
export class EachitemComponent implements OnInit {
  product: Product;
  id: any;
  constructor(private appservice: AppService,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    console.log("hello")
   this.id = this.route.snapshot.paramMap.get('id');
   console.log("bye")
    this.appservice.getProduct(this.id).subscribe(
      data => {this.product = data;
        console.log("bye");}
    );
  }
}
