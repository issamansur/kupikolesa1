import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../interfaces/IProduct";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit {
  @Input() product: IProduct;
  productSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  checkArray(): void {
    console.log(this.product)

  }

  ngOnInit(): void {
     this.route.data.subscribe((data) => {
     this.product = data['data'];
      console.log(data)
    })
   }

}
