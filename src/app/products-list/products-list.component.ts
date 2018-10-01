import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() productSelected: EventEmitter<Product>;
  private currentProduct: Product;
  constructor() {
    this.productSelected = new EventEmitter<Product>();
  }

  ngOnInit() {
  }
  clicked(product: Product): void {
     this.currentProduct = product;
     this.productSelected.emit(product);
  }
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
    }

}
