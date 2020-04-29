import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public pageTitle: string = 'Product List';
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;

  public _listFilter: string;

  constructor(private productService : ProductService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  public filteredProducts: IProduct[];
  public products: IProduct[];
  public errorMessage: string;

  performFilter(filterBy: string): IProduct[] {
    let filterByLowerCase = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterByLowerCase) !== -1;
    });
  }

  ngOnInit(): void {
    console.log('component initialise');

    this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message : string): void {
    this.pageTitle = 'Product List ' + message; 
  }
}
